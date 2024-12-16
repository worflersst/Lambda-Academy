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
const mongoDB_1 = require("./db/mongoDB");
const authRoute_1 = __importDefault(require("./route/authRoute"));
const PORT = process.env.PORT || 3004;
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use('', authRoute_1.default);
const start = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield (0, mongoDB_1.runDB)();
        app.listen(PORT, () => {
            console.log(`server start in ${PORT} port`);
        });
    }
    catch (e) {
        console.log(e);
    }
});
start();
