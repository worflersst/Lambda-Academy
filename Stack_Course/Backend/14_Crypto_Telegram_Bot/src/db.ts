import sqlite from 'sqlite3';

const dbPath = 'C:\\Users\\worflersst\\DataGripProjects\\test\\myDB.sqlite';
const db = new sqlite.Database(dbPath);


export const checkUser = async (userId: number): Promise<boolean> => {
    const query = `SELECT id FROM users WHERE users_id = ?`;

    return new Promise((resolve, reject) => {
        db.get(query, [userId], (err, row: { id: number } | undefined) => {
            if (err) {
                console.error('Ошибка при проверке пользователя:', err);
                reject(err);
            } else {
                resolve(!!row);
            }
        });
    });
};

export const addUserIdOnDB = async (userId: number): Promise<void> => {
    const query = `INSERT INTO users (users_id) VALUES (?)`;

    return new Promise((resolve, reject) => {
        db.run(query, [userId], (err: unknown) => {
            if (err) {
                const error = err as { code?: string };
                if (error.code === 'SQLITE_CONSTRAINT') {
                    console.warn('Пользователь уже существует в базе данных.');
                    resolve();
                } else {
                    console.error('Ошибка при добавлении пользователя:', error);
                    reject(error);
                }
            } else {
                console.log(`Пользователь ${userId} успешно добавлен.`);
                resolve();
            }
        });
    });
};

export const addCoinOnFavoriteList = async (userId: number, symbol: string): Promise<string> => {
    const getUserIdQuery = `SELECT id FROM users WHERE users_id = ?`;

    return new Promise((resolve) => {
        db.get(getUserIdQuery, [userId], (err, userRow: { id: number } | undefined) => {
            if (err) {
                console.error('Ошибка при получении ID пользователя:', err);
                resolve(`Произошла ошибка: ${err}`);
                return;
            }

            if (!userRow) {
                resolve('Пользователь не найден в базе данных.');
                return;
            }

            const userTableId = userRow.id;

            const checkQuery = `SELECT id FROM favourites WHERE user_id = ? AND crypto_name = ?`;
            db.get(checkQuery, [userTableId, symbol], (err, row: { id: number } | undefined) => {
                if (err) {
                    console.error('Ошибка при проверке существующего символа:', err);
                    resolve(`Произошла ошибка: ${err}`);
                    return;
                }

                if (row) {
                    resolve('Эта криптовалюта уже добавлена в избранное.');
                    return;
                }

                const insertQuery = `INSERT INTO favourites (user_id, crypto_name) VALUES (?, ?)`;
                db.run(insertQuery, [userTableId, symbol], (err) => {
                    if (err) {
                        console.error('Ошибка при добавлении криптовалюты в избранное:', err);
                        resolve(`Произошла ошибка: ${err}`);
                    } else {
                        resolve('Криптовалюта добавлена в избранное');
                    }
                });
            });
        });
    });
};

export const listFavouriteCoins = async (userId: number): Promise<string[]> => {
    const getUserIdQuery = `SELECT id FROM users WHERE users_id = ?`;

    return new Promise((resolve, reject) => {
        db.get(getUserIdQuery, [userId], (err, userRow: { id: number } | undefined) => {
            if (err) {
                console.error('Ошибка при получении ID пользователя:', err);
                reject(err);
                return;
            }

            if (!userRow) {
                resolve([]);
                return;
            }

            const userTableId = userRow.id;

            const fetchFavouritesQuery = `SELECT crypto_name FROM favourites WHERE user_id = ?`;
            db.all(
                fetchFavouritesQuery,
                [userTableId],
                (err, rows: { crypto_name: string }[]) => {
                    if (err) {
                        console.error('Ошибка при выборке избранных криптовалют:', err);
                        reject(err);
                    } else {
                        const favourites = rows.map((row) => row.crypto_name);
                        resolve(favourites);
                    }
                }
            );
        });
    });
};

export const deleteFavouriteCoin = async (userId: number, cryptoName: string): Promise<string> => {
    const getUserIdQuery = `SELECT id FROM users WHERE users_id = ?`;

    return new Promise((resolve, reject) => {
        db.get(getUserIdQuery, [userId], (err, userRow: { id: number } | undefined) => {
            if (err) {
                console.error('Ошибка при получении ID пользователя:', err);
                reject(err);
                return;
            }

            if (!userRow) {
                resolve('Вы не зарегистрированы. Используйте /start.');
                return;
            }

            const userTableId = userRow.id;

            const deleteQuery = `DELETE FROM favourites WHERE user_id = ? AND crypto_name = ?`;
            db.run(deleteQuery, [userTableId, cryptoName], function (err) {
                if (err) {
                    console.error('Ошибка при удалении криптовалюты из избранного:', err);
                    reject(err);
                } else if (this.changes === 0) {
                    resolve('Эта криптовалюта отсутствует в вашем списке избранных.');
                } else {
                    resolve(`Криптовалюта ${cryptoName} успешно удалена из избранного.`);
                }
            });
        });
    });
};
