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
const ipToInt_1 = require("./ipToInt");
const parser_1 = require("./parser");
const findCountry_1 = require("./findCountry");
const axios_1 = __importDefault(require("axios"));
const app = (0, express_1.default)();
const port = 3010;
app.use(express_1.default.json());
app.get('/getLocation/:ip?', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { data } = yield axios_1.default.get('https://api.ipify.org?format=json');
    const ip = req.query.ip || data.ip;
    const int = (0, ipToInt_1.ipToInt)(ip);
    try {
        const arrayLocation = yield (0, parser_1.parseInt)();
        const resultLocation = (0, findCountry_1.findCountry)(int, arrayLocation);
        console.log(resultLocation);
        res.send(resultLocation ? resultLocation : 'Country not found');
    }
    catch (error) {
        console.error(error);
        res.status(500).send('Internal Server Error');
    }
}));
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});
