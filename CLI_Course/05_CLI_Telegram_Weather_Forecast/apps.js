const TelegramBot = require('node-telegram-bot-api')
const { getWeatherData, city } = require('./weather');
require('dotenv').config();
const express = require("express");
const app = express();

app.get("/", (req, res) => {
	res.send("Bot is alive");
});

const port = 3000;
app.listen(port, () => {
	console.log(`Server running at http://localhost:${port}`);
});



const token = process.env.TELEGRAM_BOT_TOKEN;
const bot = new TelegramBot(token, { polling: true });

bot.onText(/\/start/, async (msg) => {
	const chatId = msg.chat.id;
	await bot.sendMessage(chatId, 'Выберите', {
		reply_markup: {
			keyboard: [
				[`Weather forecast in ${city}`],
				['3-hour interval', '6-hour interval']
			],
			resize_keyboard: true
		}
	});
});

bot.on('message', async (msg) => {
	const chatId = msg.chat.id;
	const text = msg.text;

	if (text === `Weather forecast in ${city}`) {
		await bot.sendMessage(chatId, `Here is the weather forecast for ${city}.`);
	} else if (text === '3-hour interval') {
		const weatherData3 = await getWeatherData(3);
		await bot.sendMessage(chatId, weatherData3);
	} else if (text === '6-hour interval') {
		const weatherData6 = await getWeatherData(6);
		await bot.sendMessage(chatId, weatherData6);
	}
});




//getWeatherData(3)
//getWeatherData(6)