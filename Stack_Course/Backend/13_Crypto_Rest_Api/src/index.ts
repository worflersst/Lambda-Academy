import express from 'express'
import CryptoRoute from "./routes/cryptoRoute";
import {DBcheckConnection} from "./db/dbConnection";
import {startCryptoCron} from "./service/cronService";

const app = express()
app.use(express.json())
app.use('', CryptoRoute)

const port = process.env.PORT  || 3010

app.get('/', (req, res) => {
    res.send('Hello World!')
})

const startServer = async () => {
    try {
        await DBcheckConnection()
        app.listen(port, () => {console.log(`Your server starter for ${port} port`)})
         startCryptoCron()
    }catch (err) {
        console.error('Failed to start the server:', err);
        process.exit(1);
    }
}

startServer()
