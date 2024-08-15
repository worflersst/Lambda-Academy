const TelegramBot = require('node-telegram-bot-api');
const { getWeatherData, city } = require('./weather');
const { getCurrencyRates } = require('./currency');

const currensySend = (obj) => {
	const { ccy: name, base_ccy: value, buy, sale } = obj;
	return `The currency ${name} can be bought for ${buy} ${value} and sold for ${sale} ${value}.`;
};

const token = '7456352495:AAF68oAaAJS_M_vPhkNegJt8GVXZULdMWEE';
const bot = new TelegramBot(token, { polling: true });

const mainMenu = {
	reply_markup: {
		keyboard: [
			[`/weather`],
			[`/currency`]
		],
		resize_keyboard: true
	}
};

const weatherMenu = {
	reply_markup: {
		keyboard: [
			[`Weather forecast in ${city}`],
			['3-hour interval', '6-hour interval'],
			['back']
		],
		resize_keyboard: true
	}
};

const currencyMenu = {
	reply_markup: {
		keyboard: [
			[`USD`, 'EUR'],
			['back']
		],
		resize_keyboard: true
	}
};

bot.onText(/\/start/, async (msg) => {
	const chatId = msg.chat.id;
	await bot.sendMessage(chatId, 'Выберите', mainMenu);
});

bot.onText(/\/weather/, async (msg) => {
	const chatId = msg.chat.id;
	await bot.sendMessage(chatId, 'Выберите', weatherMenu);
});

bot.onText(/\/currency/, async (msg) => {
	const chatId = msg.chat.id;
	await bot.sendMessage(chatId, 'Выберите', currencyMenu);
});

bot.onText(/back/, async (msg) => {
	const chatId = msg.chat.id;
	await bot.sendMessage(chatId, 'Выберите', mainMenu);
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

	if (text === 'EUR' || text === 'USD') {
		const currencyData = await getCurrencyRates();
		const currencyObj = currencyData.find(item => item.ccy === text);
		if (currencyObj) {
			await bot.sendMessage(chatId, currensySend(currencyObj));
		} else {
			await bot.sendMessage(chatId, `No data available for ${text}.`);
		}
	}
});
