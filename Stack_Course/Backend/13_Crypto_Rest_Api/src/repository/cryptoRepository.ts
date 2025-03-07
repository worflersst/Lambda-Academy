import fetchCryptoDataService from "../service/fetchCryptoDataService";
import db from "../db/dbConnection";
import {RowDataPacket} from "mysql2";

class CryptoRepository {
    giveCryptoDataFromDB = async (cryptoName?: string, marketName?: string, dateInterval?: string) => {
        let query = `
            SELECT 
                c.coins_name AS crypto, 
                m.market_name AS market,
                AVG(CASE WHEN p.fetch_datetime >= NOW() - INTERVAL 15 MINUTE THEN p.price END) AS avg_15m,
                AVG(CASE WHEN p.fetch_datetime >= NOW() - INTERVAL 1 HOUR THEN p.price END) AS avg_1h,
                AVG(CASE WHEN p.fetch_datetime >= NOW() - INTERVAL 4 HOUR THEN p.price END) AS avg_4h,
                AVG(CASE WHEN p.fetch_datetime >= NOW() - INTERVAL 24 HOUR THEN p.price END) AS avg_24h
            FROM price p
            JOIN markets m ON p.market_id = m.market_id
            JOIN coins c ON p.coins_id = c.coins_id
            WHERE 1=1
        `;

        const params: (string | number)[] = [];

        if (cryptoName) {
            query += ' AND c.coins_name = ? ';
            params.push(cryptoName);
        }

        if (marketName) {
            query += ' AND m.market_name = ? ';
            params.push(marketName);
        }

        query += ' GROUP BY c.coins_name, m.market_name ORDER BY c.coins_name, m.market_name';

        const [result] = await db.execute<RowDataPacket[]>(query, params);

        const formattedData: any = {};

        result.forEach(({ crypto, market, avg_15m, avg_1h, avg_4h, avg_24h }) => {
            if (!formattedData[crypto]) formattedData[crypto] = {};
            formattedData[crypto][market] = {
                period: {},
            };

            if (!dateInterval || dateInterval === '15m') {
                formattedData[crypto][market].period['15m'] = { average_price: avg_15m ? parseFloat(avg_15m) : null };
            }
            if (!dateInterval || dateInterval === '1h') {
                formattedData[crypto][market].period['1h'] = { average_price: avg_1h ? parseFloat(avg_1h) : null };
            }
            if (!dateInterval || dateInterval === '4h') {
                formattedData[crypto][market].period['4h'] = { average_price: avg_4h ? parseFloat(avg_4h) : null };
            }
            if (!dateInterval || dateInterval === '24h') {
                formattedData[crypto][market].period['24h'] = { average_price: avg_24h ? parseFloat(avg_24h) : null };
            }
        });

        return formattedData;
    };

    saveDataToDB = async () => {
        const data = await fetchCryptoDataService.giveCryptoDataWithAPI();

        for (const cryptoObj of data) {
            const { market, crypto, price, timestamp } = cryptoObj;

            const [coin] = await db.execute<RowDataPacket[]>(`SELECT coins_id FROM coins WHERE coins_name = ?`, [crypto]);
            const coinId = coin[0].coins_id;

            const [marketRecord] = await db.execute<RowDataPacket[]>(`SELECT market_id FROM markets WHERE market_name = ?`, [market]);
            const marketId = marketRecord[0].market_id;

            await db.execute(
                `INSERT INTO price(market_id, coins_id, price, fetch_datetime) VALUES(?,?,?,?)`,
                [marketId, coinId, price, new Date(timestamp)]
            );
        }
    };
}

export default new CryptoRepository();
