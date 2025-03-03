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
const mongoDB_1 = require("../db/mongoDB");
class AuthRepository {
    findUser(email) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield mongoDB_1.mongoCollection.findOne({ email });
        });
    }
    createUser(email, hashPassword) {
        return __awaiter(this, void 0, void 0, function* () {
            const createStatus = yield mongoDB_1.mongoCollection.insertOne({ email, hashPassword });
            if (createStatus) {
                return true;
            }
            return false;
        });
    }
    updateRefreshToken(email, refreshToken) {
        return __awaiter(this, void 0, void 0, function* () {
            yield mongoDB_1.mongoCollection.updateOne({ email }, { $set: { refreshToken } });
        });
    }
}
exports.default = new AuthRepository();
