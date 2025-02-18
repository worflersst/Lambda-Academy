"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ipToInt = void 0;
const ipToInt = (ipv4) => {
    const int = ipv4.split('.').reduce((int, value) => {
        return int * 256 + parseInt(value, 10);
    }, 0);
    return int;
};
exports.ipToInt = ipToInt;
