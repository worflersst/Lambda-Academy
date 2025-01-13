import TelegramBot from 'node-telegram-bot-api'
import {config} from 'dotenv'
import {addCoinOnFavoriteList, addUserIdOnDB, checkUser, deleteFavouriteCoin, listFavouriteCoins} from "./db";

config()

    const bot = new TelegramBot(process.env.BOT_TOKEN as string, {polling: true})
    const helpText = `
Доступные команды:
- /start - Начать работу с ботом
- /help - Получить список доступных команд
- /listRecent - Показать список популярных криптовалют
- /{currency_symbol} - Получить подробную информацию о криптовалюте
- /addToFavourite {currency_symbol} - Добавить криптовалюту в избранное
- /listFavourite - Показать список избранных криптовалют
- /deleteFavourite {currency_symbol} - Удалить криптовалюту из избранного
    `;
    bot.setMyCommands([
    { command: 'start', description: 'Начать работу бота' },
    { command: 'help', description: 'Получить справку по боту' },
    ]);

    interface BinanceTicker {
    symbol: string;
    price: string;
    }

    bot.onText(/\/start/, async (msg) => {
    const chatId = msg.chat.id;
    const firstnameUser = msg.chat.first_name;

    try {
        const userExists = await checkUser(chatId);

        if (!userExists) {
            console.log(`Добавление нового пользователя с ID: ${chatId}`);
            await addUserIdOnDB(chatId);
        }

        bot.sendMessage(chatId, `Welcome ${firstnameUser}`);
    } catch (error) {
        console.error('Ошибка при обработке команды /start:', error);
        bot.sendMessage(chatId, 'Произошла ошибка. Попробуйте снова.');
    }
});

    bot.onText(/\/help/, (msg) => {
        const chatId = msg.chat.id

        bot.sendMessage(chatId, helpText)
    })

    bot.onText(/\/listRecent/, async (msg) => {
    const chatId = msg.chat.id;

    const bitcoinUrl = 'https://api.binance.com/api/v3/ticker/24hr';
    let top50List = `Популярные криптовалюты:\n`;

    try {
        const response = await fetch(bitcoinUrl);
        const data = await response.json();


        const endsWithUSDTs = data.filter((item: { symbol: string, lastPrice: string }) => {
            return (
                typeof item.symbol === 'string' &&
                item.symbol.endsWith('USDT') &&
                parseFloat(item.lastPrice) > 0.0001
            );
        });

        const limitedFetch50 = endsWithUSDTs.slice(0, 50);

        const cryptoMappedData: BinanceTicker[] = limitedFetch50.map((item: { symbol: string, lastPrice: string }) => {
            return {
                symbol: item.symbol,
                price: item.lastPrice
            };
        });

        cryptoMappedData.forEach(item => {
            top50List += `/${item.symbol}, Price: ${item.price} \n`;
        });

        bot.sendMessage(chatId, top50List);
    } catch (error) {
        console.error('Ошибка при запросе или обработке данных:', error);
        bot.sendMessage(chatId, 'Произошла ошибка при получении списка популярных криптовалют.');
    }
});

    bot.onText(/\/([A-Z]+USDT)$/, async (msg, match) => {
        const chatId = msg.chat.id
        const symbol = match![1];

        const fetchWithCurrencySymbol = async (symbol: string) => {
                const urlForFetch = `https://api.binance.com/api/v3/klines?symbol=${symbol}&interval=30m&limit=48`;
                const response = await fetch(urlForFetch);
                const data = await response.json();
                return data;
        };

            try {
                const favourites = await listFavouriteCoins(chatId);
                const isFavourite = favourites.includes(symbol);

                const allData = await fetchWithCurrencySymbol(symbol);

                const now = Date.now();
                const intervals: { [key: string]: number } = {
                    '30m': now - 30 * 60 * 1000,
                    '1h': now - 60 * 60 * 1000,
                    '3h': now - 3 * 60 * 60 * 1000,
                    '6h': now - 6 * 60 * 60 * 1000,
                    '12h': now - 12 * 60 * 60 * 1000,
                    '24h': now - 24 * 60 * 60 * 1000,
                };

                const findClosest = (timestamp: number) => {
                    return allData.find((item: any) => item[0] >= timestamp) || null;
                };

                let responseDataSymbol = `Выбранная криптовалюта: ${symbol} \nИстория стоимости ${symbol}:\n`;

                for (const [interval, timestamp] of Object.entries(intervals)) {
                    const closestData = findClosest(timestamp);

                    if (closestData) {
                        const price = closestData[4];
                        responseDataSymbol += `${interval}: ${price} \n`;
                    } else {
                        responseDataSymbol += `${interval}: Нет данных \n`;
                    }
                }

                bot.sendMessage(chatId, responseDataSymbol, {
                    reply_markup: {
                        inline_keyboard: [
                            [
                                {
                                    text: isFavourite
                                        ? 'Удалить из избранного'
                                        : 'Добавить в избранное',
                                    callback_data: isFavourite
                                        ? `remove_${symbol}`
                                        : `add_${symbol}`,
                                },
                            ],
                        ],
                    },
                })            } catch (error) {
                bot.sendMessage(chatId, 'Произошла ошибка при обработке данных.');
                console.error(error);
            }
        });

    bot.on('callback_query', async (query) => {
    const chatId = query.message!.chat.id;
    const data = query.data!;

    try {
        if (data.startsWith('add_')) {
            const symbol = data.replace('add_', '');
            const result = await addCoinOnFavoriteList(chatId, symbol);
            bot.answerCallbackQuery(query.id, { text: result });
            bot.editMessageReplyMarkup(
                {
                    inline_keyboard: [
                        [
                            {
                                text: 'Удалить из избранного',
                                callback_data: `remove_${symbol}`,
                            },
                        ],
                    ],
                },
                {
                    chat_id: chatId,
                    message_id: query.message!.message_id,
                }
            );
        } else if (data.startsWith('remove_')) {
            const symbol = data.replace('remove_', '');
            const result = await deleteFavouriteCoin(chatId, symbol);
            bot.answerCallbackQuery(query.id, { text: result });
            bot.editMessageReplyMarkup(
                {
                    inline_keyboard: [
                        [
                            {
                                text: 'Добавить в избранное',
                                callback_data: `add_${symbol}`,
                            },
                        ],
                    ],
                },
                {
                    chat_id: chatId,
                    message_id: query.message!.message_id,
                }
            );
        }
    } catch (error) {
        console.error('Ошибка при обработке callback_query:', error);
        bot.answerCallbackQuery(query.id, { text: 'Произошла ошибка. Попробуйте снова.' });
    }
});

    bot.onText(/\/addToFavourite (\w+)/, async (msg, match) => {
    const chatId = msg.chat.id;
    const symbol = match![1];

    const userExists = await checkUser(chatId);
    if (!userExists) {
        await addUserIdOnDB(chatId);
    }

    const result = await addCoinOnFavoriteList(chatId, symbol);
    bot.sendMessage(chatId, result);

});

    bot.onText(/\/listFavourite/, async (msg) => {
    const chatId = msg.chat.id;

    try {
        const favourites = await listFavouriteCoins(chatId);

        if (favourites.length === 0) {
            bot.sendMessage(chatId, 'Ваш список избранных криптовалют пуст.');
        } else {
            const favouritesList = favourites.join('\n');
            bot.sendMessage(chatId, `Ваш список избранных криптовалют:\n${favouritesList}`);
        }
    } catch (error) {
        console.error('Ошибка при получении списка избранных криптовалют:', error);
        bot.sendMessage(chatId, 'Произошла ошибка при получении списка избранных криптовалют.');
    }
});

    bot.onText(/\/deleteFavourite (\w+)/, async (msg, match) => {
    const chatId = msg.chat.id;
    const symbol = match![1];

    try {
        const result = await deleteFavouriteCoin(chatId, symbol);
        bot.sendMessage(chatId, result);
    } catch (error) {
        console.error('Ошибка при удалении криптовалюты:', error);
        bot.sendMessage(chatId, 'Произошла ошибка при удалении криптовалюты из избранного.');
    }
});




