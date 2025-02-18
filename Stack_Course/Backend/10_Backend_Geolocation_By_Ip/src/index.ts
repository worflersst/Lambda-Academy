import express from 'express';
import {ipToInt} from './ipToInt';
import {parseInt} from './parser';
import {findCountry} from './findCountry';
import axios from "axios";

const app = express();
const port = 3010;

app.use(express.json());

app.get('/getLocation/:ip?', async (req, res) => {
    const { data } = await axios.get('https://api.ipify.org?format=json')
    const ip = req.query.ip || data.ip
    const int = ipToInt(ip);

    try {
        const arrayLocation = await parseInt();
        const resultLocation = findCountry(int, arrayLocation);
        console.log(resultLocation);

        res.send(resultLocation ? resultLocation: 'Country not found');
    } catch (error) {
        console.error(error);
        res.status(500).send('Internal Server Error');
    }
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});
