const TelegramBot = require('node-telegram-bot-api')

const token = '7036784340:AAF4C3kXR1s6ad236fzqMtuCzOZ7_wcRFe8'

const bot = new TelegramBot(token, { polling: true });

bot.on('message', (msg) => {
	const text = msg.text
	const id = msg.chat.id

	if (text === 'photo') {
		const randomUrl = `https://picsum.photos/200?random=${Math.random()}`;
		bot.sendPhoto(id, randomUrl);
		console.log(`Пользователь ${msg.chat.username} запросил картинку`)
	}
	else {
		bot.sendMessage(id, text)
		console.log(`Пользователь ${msg.chat.username} написал ${text}`)
	}
})