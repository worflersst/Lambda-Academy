import express from 'express'
import {runDB} from "./db/mongoDB";
import authRoute from "./route/authRoute";

const PORT = process.env.PORT || 3004

const app = express();
app.use(express.json())
app.use('', authRoute)


const start = async () => {
    try {
        await runDB()
        app.listen(PORT, () => {
            console.log(`server start in ${PORT} port`)
        })
    }catch (e) {
          console.log(e)
    }
}

start()
