"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const authControllers_1 = __importDefault(require("../controllers/authControllers"));
const express_validator_1 = require("express-validator");
const authMiddleware_1 = __importDefault(require("../middlewares/authMiddleware"));
const router = (0, express_1.Router)();
router.post('/sing_up', [
    (0, express_validator_1.check)('email', "The Username cannot be empty").notEmpty(),
    (0, express_validator_1.check)('password', "The Password cannot be shorted than 4 and longest than 10 characters").isLength({ min: 4, max: 10 })
], authControllers_1.default.sing_up);
router.post('/login', authControllers_1.default.login);
router.post('/refresh', authControllers_1.default.refresh);
router.get('/me/:request_num', authMiddleware_1.default, authControllers_1.default.getDataUser);
exports.default = router;
