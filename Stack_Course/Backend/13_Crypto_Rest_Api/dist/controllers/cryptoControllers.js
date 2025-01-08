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
const cryptoRepository_1 = __importDefault(require("../repository/cryptoRepository"));
class CryptoControllers {
    constructor() {
        this.giveCryptoData = (req, res) => __awaiter(this, void 0, void 0, function* () {
            try {
                const { cryptoName, marketName, dateInterval } = req.query;
                const data = yield cryptoRepository_1.default.giveCryptoDataFromDB(cryptoName, marketName, dateInterval);
                res.status(200).json(data);
            }
            catch (error) {
                console.error("Error fetching crypto data:", error);
                res.status(500).json({ error: "Failed to fetch crypto data" });
            }
        });
    }
}
exports.default = new CryptoControllers();
