"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const authMiddleware = (req, res, next) => {
    if (req.method === "OPTIONS") {
        return next();
    }
    try {
        const authHeader = req.headers.authorization;
        if (!authHeader) {
            res.status(403).json({ message: "Authorization header missing" });
            return;
        }
        const token = authHeader.split(" ")[1];
        if (!token) {
            res.status(403).json({ message: "User not authenticated" });
            return;
        }
        const secret = process.env.SECRET || "secret";
        const decodedData = jsonwebtoken_1.default.verify(token, secret);
        console.log("Decoded token data:", decodedData);
        req.user = decodedData;
        next();
    }
    catch (error) {
        console.log(error);
        res.status(403).json({ message: "User not authenticated" });
    }
};
exports.default = authMiddleware;
