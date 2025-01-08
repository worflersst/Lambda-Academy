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
exports.DBcheckConnection = void 0;
const mysql2_1 = __importDefault(require("mysql2"));
const db = mysql2_1.default.createPool({
    host: "127.0.0.1",
    user: "root",
    password: "34385734",
    database: 'cryptorestapi'
}).promise();
const DBcheckConnection = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const connection = yield db.getConnection();
        console.log('Successfully connected to the MySQL database');
        connection.release();
    }
    catch (err) {
        console.error('Failed to connect to the MySQL database:', err);
        process.exit(1);
    }
});
exports.DBcheckConnection = DBcheckConnection;
exports.default = db;
