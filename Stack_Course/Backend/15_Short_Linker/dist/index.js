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
const db_1 = require("./db/db");
const express_1 = __importDefault(require("express"));
const crypto_1 = __importDefault(require("crypto"));
const app = (0, express_1.default)();
app.use(express_1.default.json());
const PORT = 5000;
const generateShortCode = () => {
    return crypto_1.default.randomBytes(4).toString('hex');
};
const checkHaveInDB = (shortCode) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield db_1.mongoCollection.findOne({ shortCode });
        return !!result;
    }
    catch (error) {
        console.error('Ошибка при проверке наличия в базе:', error);
        throw error;
    }
});
app.post('/short', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { originalURL } = req.body;
    if (!originalURL || !/^https?:\/\/.+/.test(originalURL)) {
        return res.status(400).json({ message: 'Некорректный URL.' });
    }
    try {
        let shortCode;
        do {
            shortCode = generateShortCode();
        } while (yield checkHaveInDB(shortCode));
        yield db_1.mongoCollection.insertOne({ originalURL, shortCode });
        res.status(200).json({ shortUrl: `http://localhost:${PORT}/${shortCode}` });
    }
    catch (error) {
        console.error('Ошибка при создании короткой ссылки:', error);
        res.status(500).json({ message: 'Произошла ошибка при создании короткой ссылки.' });
    }
}));
app.get('/:shortCode', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { shortCode } = req.params;
    try {
        const result = yield db_1.mongoCollection.findOne({ shortCode });
        if (result) {
            res.redirect(result.originalURL);
        }
        else {
            res.status(404).json({ message: 'Короткая ссылка не найдена.' });
        }
    }
    catch (error) {
        console.error('Ошибка при перенаправлении:', error);
        res.status(500).json({ message: 'Произошла ошибка при перенаправлении.' });
    }
}));
const start = () => __awaiter(void 0, void 0, void 0, function* () {
    app.listen(PORT, () => {
        console.log(`Сервер стартнулся на порту ${PORT}`);
    });
    yield (0, db_1.runDB)();
});
start();
