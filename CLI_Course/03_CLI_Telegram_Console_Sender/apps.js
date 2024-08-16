const { Command } = require('commander');
const TelegramApi = require('node-telegram-bot-api');

const token = '7305352391:AAGNzgukZzZt6pnlQrlbNhrz-VXBqpw7-bk';
const myId = 1218844319;


const bot = new TelegramApi(token, { polling: false });
const program = new Command();

program
	.version('0.0.1')
	.description('Мой тг бот для стажировки');

const sendMessage = async (msg) => {
	await bot.sendMessage(myId, msg);
	process.exit(0);
};

const sendPhoto = async (filePath) => {
	await bot.sendPhoto(myId, filePath)
	process.exit(0);
};

program
	.command('message <text>')
	.alias('m')
	.description('Добавьте сообщение')
	.action(sendMessage);

program
	.command('photo <path>')
	.alias('p')
	.description('Перетащите фотку или опишите путь к ней')
	.action(sendPhoto);

program.parse(process.argv);
;
