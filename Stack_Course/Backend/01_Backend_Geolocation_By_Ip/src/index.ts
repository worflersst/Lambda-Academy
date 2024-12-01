import express from 'express';
import {ipToInt} from './ipToInt';
import {parseInt} from './parser';
import {findCountry} from './findCountry';

const app = express();
const port = 3000;

app.use(express.json());

app.get('/getLocation/:ip', async (req, res) => {
    const ip = req.params.ip;
    const int = ipToInt(ip);

    try {
        const arrayLocation = await parseInt();
        const resultLocation = findCountry(int, arrayLocation);
        console.log(resultLocation);

        res.send(resultLocation ? resultLocation.country_name : 'Country not found');
    } catch (error) {
        console.error(error);
        res.status(500).send('Internal Server Error');
    }
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});
