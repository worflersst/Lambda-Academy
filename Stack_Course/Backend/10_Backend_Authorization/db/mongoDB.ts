import {MongoClient} from "mongodb";

const mongoURI =  process.env.mongoURI || 'mongodb://127.0.0.1:27017'
const client =  new MongoClient(mongoURI)

const nameDB = 'tuskTwo'
const mongoDB = client.db(nameDB);
export const mongoCollection = mongoDB.collection('users');



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
