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
Object.defineProperty(exports, "__esModule", { value: true });
const cryptoApiUrls_1 = require("../constants/cryptoApiUrls");
class fetchCryptoDataService {
    constructor() {
        this.giveCryptoDataWithAPI = () => __awaiter(this, void 0, void 0, function* () {
            const requests = [];
            Object.entries(cryptoApiUrls_1.API_URL).forEach(([apiName, cryptoURLs]) => {
                Object.entries(cryptoURLs).forEach(([cryptoSymbol, url]) => {
                    requests.push(this.fetchWithApiKey(url, apiName).then((data) => ({
                        market: apiName,
                        crypto: cryptoSymbol,
                        price: this.formatPrice(this.extractPrice(data, apiName)),
                        timestamp: new Date().toISOString(),
                    })));
                });
            });
            const response = yield Promise.all(requests);
            console.log(response);
            return response;
        });
        this.fetchWithApiKey = (url, apiName) => __awaiter(this, void 0, void 0, function* () {
            const options = {};
            if (apiName === 'COIN_STATS') {
                options.headers = {
                    'X-API-KEY': '1/4cWpM/pgx7vB9zOnqqZ6NFzd+MRNTERf9J20cDpi8=',
                };
            }
            try {
                const response = yield fetch(url, options);
                return yield response.json();
            }
            catch (error) {
                console.error(`Error fetching data from ${apiName}:`, error);
                return null;
            }
        });
    }
    extractPrice(data, apiName) {
        var _a, _b, _c, _d;
        switch (apiName) {
            case 'COIN_BASE':
                return parseFloat((_a = data === null || data === void 0 ? void 0 : data.data) === null || _a === void 0 ? void 0 : _a.amount) || null;
            case 'COIN_STATS':
                return parseFloat(data === null || data === void 0 ? void 0 : data.price) || null;
            case 'KUCOIN':
                return parseFloat((_b = data === null || data === void 0 ? void 0 : data.data) === null || _b === void 0 ? void 0 : _b.price) || null;
            case 'COIN_PAPRIKA':
                return parseFloat((_d = (_c = data === null || data === void 0 ? void 0 : data.quotes) === null || _c === void 0 ? void 0 : _c.USD) === null || _d === void 0 ? void 0 : _d.price) || null;
            default:
                return null;
        }
    }
    formatPrice(price) {
        return price !== null ? price.toFixed(2) : null;
    }
}
exports.default = new fetchCryptoDataService();
