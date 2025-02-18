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
const authRepository_1 = __importDefault(require("../repository/authRepository"));
const bcryptjs_1 = __importDefault(require("bcryptjs"));
const express_validator_1 = require("express-validator");
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const generateAccesToken = (email) => {
    const payload = {
        email
    };
    const secret = process.env.SECRET || 'secret';
    const expiresIn = Math.floor(Math.random() * (60 - 30 + 1)) + 30;
    return jsonwebtoken_1.default.sign(payload, secret, { expiresIn: `${expiresIn}s` });
};
const generateRefreshToken = (email) => {
    const payload = {
        email
    };
    const secret = process.env.SECRET_REFRESH || 'refreshSecret';
    const expiresIn = '7d';
    return jsonwebtoken_1.default.sign(payload, secret, { expiresIn });
};
class AuthControllers {
    sing_up(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const error = (0, express_validator_1.validationResult)(req);
                if (!error.isEmpty()) {
                    res.status(400).json(error);
                    return;
                }
                const { email, password } = req.body;
                const candidate = yield authRepository_1.default.findUser(email);
                if (candidate) {
                    res.status(400).json({ message: 'User with this name already exists' });
                    return;
                }
                const hashPassword = bcryptjs_1.default.hashSync(password, 7);
                const user = yield authRepository_1.default.createUser(email, hashPassword);
                if (user) {
                    res.json({ message: 'User sing_up' });
                }
            }
            catch (e) {
                console.log(e);
                res.status(400).json({ message: 'sign_up error!' });
            }
        });
    }
    login(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { email, password } = req.body;
                const user = yield authRepository_1.default.findUser(email);
                if (!user) {
                    res.status(400).json({ message: `User ${email} not search` });
                    return;
                }
                const validePassword = bcryptjs_1.default.compareSync(password, user.hashPassword);
                if (!validePassword) {
                    res.status(400).json({ message: `Password not valide` });
                    return;
                }
                const token = generateAccesToken(email);
                const refreshToken = generateRefreshToken(email);
                res.json({ token, refreshToken });
            }
            catch (e) {
                console.log(e);
                res.status(400).json({ message: 'login error!' });
            }
        });
    }
    refresh(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const refreshString = req.headers.authorization;
                const refreshToken = refreshString === null || refreshString === void 0 ? void 0 : refreshString.split(' ')[1];
                if (!refreshToken) {
                    res.status(403).json({ message: "Refresh token is required" });
                    return;
                }
                const secret = process.env.SECRET_REFRESH || 'refreshSecret';
                const decodedData = jsonwebtoken_1.default.verify(refreshToken, secret);
                if (!decodedData) {
                    res.status(403).json({ message: 'Invalid or expired refresh token' });
                    return;
                }
                const user = yield authRepository_1.default.findUser(decodedData.email);
                if (!user) {
                    res.status(404).json({ message: "User not found" });
                    return;
                }
                const newAccesToken = generateAccesToken(decodedData.email);
                res.status(200).json({ newAccesToken });
                return;
            }
            catch (e) {
                console.error(e);
                res.status(500).json({ message: 'Internal server error' });
            }
        });
    }
    getDataUser(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                if (!req.user || !req.user.email) {
                    res.status(401).json({ message: 'user Email not found' });
                    return;
                }
                const userPayload = req.user.email;
                const userData = yield authRepository_1.default.findUser(userPayload);
                if (!userData) {
                    res.status(404).json({ message: 'User not found' });
                    return;
                }
                const responseData = {
                    request_num: req.params.request_num,
                    data: {
                        username: userData.email,
                    },
                };
                res.json(responseData);
            }
            catch (e) {
                console.log(e);
                res.status(401).json({ message: 'Token has expired or invalid' });
            }
        });
    }
}
exports.default = new AuthControllers();
