import {CsvStringType} from './parser';
import {ipToInt} from "./ipToInt";

const binarySearch = (array: CsvStringType[], ipInt: number): CsvStringType | undefined => {
    let left = 0;
    let right = array.length - 1;

    while (left <= right) {
        const mid = Math.floor((left + right) / 2);
        const startIp = ipToInt(array[mid].start_ip);
        const endIp = ipToInt(array[mid].end_ip);

        if (startIp <= ipInt && endIp >= ipInt) {
            return array[mid];
        } else if (startIp > ipInt) {
            right = mid - 1;
        } else {
            left = mid + 1;
        }
    }
    return undefined;
};

export const findCountry = (ipInt: number, locationArray: CsvStringType[]): CsvStringType | undefined => {
    return binarySearch(locationArray, ipInt);
};
