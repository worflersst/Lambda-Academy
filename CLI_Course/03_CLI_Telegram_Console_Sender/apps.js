const { Command } = require('commander');
const TelegramApi = require('node-telegram-bot-api');

const token = '7305352391:AAGNzgukZzZt6pnlQrlbNhrz-VXBqpw7-bk';
const myId = 1218844319;


const bot = new TelegramApi(token, { polling: true });
const program = new Command();

program
	.version('0.0.1')
	.description('Мой тг бот для стажировки');

const sendMessage = (msg) => {
	bot.sendMessage(myId, msg);
};

const sendPhoto = (filePath) => {
	bot.sendPhoto(myId, filePath)
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
