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
exports.runDB = exports.mongoCollection = void 0;
const mongodb_1 = require("mongodb");
const url = 'mongodb://127.0.0.1:27017';
const client = new mongodb_1.MongoClient(url);
const nameDB = 'Tusk15';
const mongoDB = client.db(nameDB);
exports.mongoCollection = mongoDB.collection('short_linker');
const runDB = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield client.connect();
        yield client.db(nameDB).command({ ping: 1 });
        console.log("Connected successfully to MongoDB");
    }
    catch (_a) {
        console.log("Can't connect to MongoDB");
        yield client.close();
    }
});
exports.runDB = runDB;
