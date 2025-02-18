import {mongoCollection, runDB} from "./db/db";
import express, {Request, Response} from 'express'
import crypto from "crypto";


const app = express()
app.use(express.json())
const PORT = 5000

const generateShortCode = () => {
   return crypto.randomBytes(4).toString('hex')
}

const checkHaveInDB = async (shortCode: string): Promise<boolean> => {
    try {
        const result = await mongoCollection.findOne({ shortCode });
        return !!result
    } catch (error) {
        console.error('Ошибка при проверке наличия в базе:', error);
        throw error;
    }
}

app.post('/short', async (req: Request, res: Response): Promise<void> => {
    const { originalURL } = req.body;

    if (!originalURL || !/^https?:\/\/.+/.test(originalURL)) {
        res.status(400).json({ message: 'Некорректный URL.' });
        return; 
    }

    try {
        let shortCode: string;
        do {
            shortCode = generateShortCode();
        } while (await checkHaveInDB(shortCode));

        await mongoCollection.insertOne({ originalURL, shortCode });
        res.status(200).json({ message: 'Data saved', shortCode, originalURL });
    } catch (error) {
        console.error('Ошибка при создании короткой ссылки:', error);
        res.status(500).json({ message: 'Произошла ошибка при создании короткой ссылки.' });
    }
});



app.get('/:shortCode', async (req: Request, res: Response) => {
    const { shortCode } = req.params;

    try {
        const result = await mongoCollection.findOne({ shortCode });

        if (result) {
            res.redirect(result.originalURL);
        } else {
            res.status(404).json({ message: 'Короткая ссылка не найдена.' });
        }
    } catch (error) {
        console.error('Ошибка при перенаправлении:', error);
        res.status(500).json({ message: 'Произошла ошибка при перенаправлении.' });
    }
});

const start = async () => {
    app.listen(PORT, () => {
        console.log(`Сервер стартнулся на порту ${PORT}`)})
    await runDB()
 }

 start()