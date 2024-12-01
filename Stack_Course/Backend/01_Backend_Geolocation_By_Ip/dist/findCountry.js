"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.findCountry = void 0;
const ipToInt_1 = require("./ipToInt");
const binarySearch = (array, ipInt) => {
    let left = 0;
    let right = array.length - 1;
    while (left <= right) {
        const mid = Math.floor((left + right) / 2);
        const startIp = (0, ipToInt_1.ipToInt)(array[mid].start_ip);
        const endIp = (0, ipToInt_1.ipToInt)(array[mid].end_ip);
        if (startIp <= ipInt && endIp >= ipInt) {
            return array[mid]; // Найдена страна
        }
        else if (startIp > ipInt) {
            right = mid - 1;
        }
        else {
            left = mid + 1;
        }
    }
    return undefined;
};
const findCountry = (ipInt, locationArray) => {
    return binarySearch(locationArray, ipInt);
};
exports.findCountry = findCountry;
