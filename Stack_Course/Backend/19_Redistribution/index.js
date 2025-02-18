import {Client} from 'pg';
import dotenv from 'dotenv';

dotenv.config();

const generateUserName = () => {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    return Array.from({ length: 5 }, () => characters[Math.floor(Math.random() * characters.length)]).join('');
};

const randomRangeNumber = (max, min = 0) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
};

const client = new Client({
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    ssl: {
        rejectUnauthorized: false
    }
});

const connectDB = async () => {
    try {
        await client.connect();
        console.log('✅ Успешное подключение к RDS PostgreSQL');
    } catch (error) {
        console.error('Ошибка подключения:', error);
    }
};

const getUserOrCreate = async (userName) => {
    let user = await client.query('SELECT id FROM users WHERE users_name = $1', [userName]);
    if (user.rows.length === 0) {
        const newUser = await client.query('INSERT INTO users(users_name) VALUES ($1) RETURNING id', [userName]);
        await client.query('INSERT INTO requests_limits (user_id, request_count) VALUES ($1, 0)', [newUser.rows[0].id]);
        return newUser.rows[0].id;
    }
    return user.rows[0].id;
};

const getAllShopsIds = async () => {
    const shopsIds = await client.query('SELECT id FROM stores');
    return shopsIds.rows.map(row => row.id);
};

const incrementUserRequests = async (userId) => {
    await client.query(`UPDATE requests_limits SET request_count = request_count + 1 WHERE user_id = $1`, [userId]);
};

const checkRequestLimit = async (userId) => {
    const result = await client.query('SELECT request_count FROM requests_limits WHERE user_id = $1', [userId]);
    return result.rows.length > 0 && result.rows[0].request_count < 10000;
};

const responseToShop = async (shopId) => {
    const shopIdCheck = await client.query("SELECT id FROM stores WHERE id = $1", [shopId]);
    return shopIdCheck.rows.length > 0;
};

exports.handler = async (event) => {
    await connectDB();

    let userName = event.queryStringParameters?.nameUser || generateUserName();
    const userId = await getUserOrCreate(userName);

    if (!(await checkRequestLimit(userId))) {
        return {
            statusCode: 403,
            body: JSON.stringify({ message: 'Вы исчерпали бесплатный лимит запросов.' })
        };
    }

    await incrementUserRequests(userId);

    const shopsIdsArray = await getAllShopsIds();
    const validShopId = shopsIdsArray[randomRangeNumber(shopsIdsArray.length - 1)];
    const invalidShopId = Math.max(...shopsIdsArray) + randomRangeNumber(10, 1);

    const requestIds = [validShopId, invalidShopId];
    let results = { success: [], invalid: [] };

    for (let shopId of requestIds) {
        const exists = await responseToShop(shopId);
        exists ? results.success.push(shopId) : results.invalid.push(shopId);
    }

    return {
        statusCode: 200,
        body: JSON.stringify({
            message: `Запрос обработан`,
            userId,
            processedShops: results
        })
    };
};




// Тебе нужно разобраться почему process.env не работает. Access
// Покдлючиться к серверу и получить нужную бд
// Получаем нужные таблицы, делаем проверку по имени в бд, айди шопов и проверяем не делал ли юзер 10к запросов
// Дописываем эту функцию и архивируем её.
// Через постман делаем запрос, в параметрах передаём юзера, далее в бд докручиваем ему 9999 запросов и проверяем выдаст ли ошибку при 10к
// Далее тестим с помощью k6 функцию на 10к запросов и готово
