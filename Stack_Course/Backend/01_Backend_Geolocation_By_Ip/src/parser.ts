import csv from 'csv-parser';
import fs from 'fs';
import path from 'path';

export type CsvStringType = {
    start_ip: string;
    end_ip: string;
    country_code: string;
    country_name: string;
};

export const parseInt = (): Promise<CsvStringType[]> => {
    return new Promise((resolve, reject) => {
        const results: CsvStringType[] = [];

        const filePath = path.resolve(__dirname, 'IP2LOCATION-LITE-DB1.CSV');
        fs.createReadStream(filePath)
            .pipe(csv({
                headers: ['start_ip', 'end_ip', 'country_code', 'country_name'],
                skipLines: 0,
                quote: '"',
            }))
            .on('data', (data: CsvStringType) => {
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
