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
const express_1 = __importDefault(require("express"));
const cryptoRoute_1 = __importDefault(require("./routes/cryptoRoute"));
const dbConnection_1 = require("./db/dbConnection");
const cronService_1 = require("./service/cronService");
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use('', cryptoRoute_1.default);
const port = process.env.PORT || 3010;
app.get('/', (req, res) => {
    res.send('Hello World!');
});
const startServer = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield (0, dbConnection_1.DBcheckConnection)();
        app.listen(port, () => { console.log(`Your server starter for ${port} port`); });
        (0, cronService_1.startCryptoCron)();
    }
    catch (err) {
        console.error('Failed to start the server:', err);
        process.exit(1);
    }
});
startServer();
