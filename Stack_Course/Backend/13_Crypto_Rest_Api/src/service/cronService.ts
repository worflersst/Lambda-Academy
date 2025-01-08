import cron from 'node-cron';
import cryptoRepository from '../repository/cryptoRepository';

export const startCryptoCron = () => {
    cron.schedule('*/5 * * * *', async () => {
        console.log('Начало cron-задачи: сохранение данных в БД');
        try {
            await cryptoRepository.saveDataToDB();
            console.log('Данные успешно сохранены в БД');
        } catch (error) {
            console.error('Ошибка в cron-задаче:', error);
        }
    });
    console.log('Cron-задача запущена');
};