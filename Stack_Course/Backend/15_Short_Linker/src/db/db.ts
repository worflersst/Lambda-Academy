import {MongoClient} from 'mongodb'

const url = 'mongodb://127.0.0.1:27017';
const client = new MongoClient(url);

const nameDB = 'Tusk15'
const mongoDB = client.db(nameDB)

// db.collection = originalURL \ shortCode

export const mongoCollection = mongoDB.collection('short_linker')

export const runDB = async () => {
    try {
        await client.connect();
        await client.db(nameDB).command({ping: 1})

        console.log("Connected successfully to MongoDB");
    } catch {
        console.log("Can't connect to MongoDB");

        await client.close();
    }
}

