"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.parseInt = void 0;
const csv_parser_1 = __importDefault(require("csv-parser"));
const fs_1 = __importDefault(require("fs"));
const path_1 = __importDefault(require("path"));
const parseInt = () => {
    return new Promise((resolve, reject) => {
        const results = [];
        const filePath = path_1.default.resolve(__dirname, 'IP2LOCATION-LITE-DB1.CSV');
        fs_1.default.createReadStream(filePath)
            .pipe((0, csv_parser_1.default)({
            headers: ['start_ip', 'end_ip', 'country_code', 'country_name'],
            skipLines: 0,
            quote: '"',
        }))
            .on('data', (data) => {
            results.push(data);
        })
            .on('end', () => {
            resolve(results);
        })
            .on('error', (err) => {
            reject(err);
        });
    });
};
exports.parseInt = parseInt;
