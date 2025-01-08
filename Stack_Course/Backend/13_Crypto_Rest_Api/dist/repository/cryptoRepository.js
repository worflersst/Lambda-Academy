"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fetchCryptoDataService_1 = __importDefault(require("../service/fetchCryptoDataService"));
const dbConnection_1 = __importDefault(require("../db/dbConnection"));
class CryptoRepository {
    constructor() {
        this.giveCryptoDataFromDB = (cryptoName, marketName, dateInterval) => __awaiter(this, void 0, void 0, function* () {
            let timeState = '';
            if (dateInterval) {
                switch (dateInterval) {
                    case '15m':
                        timeState = 'AND fetch_datetime >= NOW() - INTERVAL 15 MINUTE ';
                        break;
                    case '1h':
                        timeState = 'AND fetch_datetime >= NOW() - INTERVAL 1 HOUR ';
                        break;
                    case '4h':
                        timeState = 'AND fetch_datetime >= NOW() - INTERVAL 4 HOUR ';
                        break;
                    case '24h':
                        timeState = 'AND fetch_datetime >= NOW() - INTERVAL 24 HOUR ';
                        break;
                    default:
                        throw new Error('Invalid input interval. Please use 15m, 1h, 4h, 24h.');
                }
            }
            let query = `
    SELECT 
        p.market_id AS market_id, 
        p.coins_id AS coins_id, 
        p.price AS price, 
        p.fetch_datetime AS fetch_datetime
    FROM 
        price p
    JOIN 
        markets m ON p.market_id = m.market_id
    JOIN 
        coins c ON p.coins_id = c.coins_id
    WHERE 
        1=1
`;
            const params = [];
            if (cryptoName) {
                query += ' AND c.coins_name = ? ';
                params.push(cryptoName);
            }
            if (marketName) {
                query += ' AND m.market_name = ? ';
                params.push(marketName);
            }
            query += timeState;
            if (!marketName) {
                query = `
            SELECT 
                c.coins_name AS crypto,
                AVG(p.price) AS average_price,
                COUNT(DISTINCT m.market_name) AS market_count
            FROM 
                price p
            JOIN 
                markets m ON p.market_id = m.market_id
            JOIN 
                coins c ON p.coins_id = c.coins_id
            WHERE 
                1=1
                ${cryptoName ? 'AND c.coins_name = ? ' : ''}
                ${timeState}
            GROUP BY 
                c.coins_name
            `;
            }
            const [price] = yield dbConnection_1.default.execute(query, params);
            if (!marketName) {
                return price.map((row) => ({
                    crypto: row.coins_name,
                    averagePrice: parseFloat(row.average_price),
                    marketCount: row.market_count,
                }));
            }
            return price.map((row) => ({
                crypto: row.coins_name,
                market: row.market_name,
                price: parseFloat(row.price),
                timestamp: row.fetch_datetime,
            }));
        });
        this.saveDataToDB = () => __awaiter(this, void 0, void 0, function* () {
            const data = yield fetchCryptoDataService_1.default.giveCryptoDataWithAPI();
            for (const cryptoObj of data) {
                const { market, crypto, price, timestamp } = cryptoObj;
                const [coin] = yield dbConnection_1.default.execute(`SELECT coins_id FROM coins WHERE coins_name = ?`, [crypto]);
                const coinId = coin[0].coins_id;
                const [marketRecord] = yield dbConnection_1.default.execute(`SELECT market_id FROM markets WHERE market_name = ?`, [market]);
                const marketId = marketRecord[0].market_id;
                yield dbConnection_1.default.execute(`INSERT INTO price(market_id, coins_id, price, fetch_datetime) 
                 VALUES(?,?,?,?)`, [marketId, coinId, price, new Date(timestamp)]);
            }
        });
    }
}
exports.default = new CryptoRepository();
