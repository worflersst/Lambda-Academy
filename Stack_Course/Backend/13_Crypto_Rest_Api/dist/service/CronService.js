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
exports.startCryptoCron = void 0;
const node_cron_1 = __importDefault(require("node-cron"));
const cryptoRepository_1 = __importDefault(require("../repository/cryptoRepository"));
const startCryptoCron = () => {
    node_cron_1.default.schedule('*/5 * * * *', () => __awaiter(void 0, void 0, void 0, function* () {
        console.log('Начало cron-задачи: сохранение данных в БД');
        try {
            yield cryptoRepository_1.default.saveDataToDB();
            console.log('Данные успешно сохранены в БД');
        }
        catch (error) {
            console.error('Ошибка в cron-задаче:', error);
        }
    }));
    console.log('Cron-задача запущена');
};
exports.startCryptoCron = startCryptoCron;
