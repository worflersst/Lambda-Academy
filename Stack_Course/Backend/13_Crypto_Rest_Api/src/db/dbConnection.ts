import mysql from 'mysql2'


const db = mysql.createPool({
    host: "127.0.0.1",
    user: "root",
    password: "34385734",
    database : 'cryptorestapi'
}).promise();

export const DBcheckConnection = async () => {
    try {
        const connection = await db.getConnection()
        console.log('Successfully connected to the MySQL database')
        connection.release();
    } catch (err) {
        console.error('Failed to connect to the MySQL database:', err);
        process.exit(1);
    }
}

export default db;