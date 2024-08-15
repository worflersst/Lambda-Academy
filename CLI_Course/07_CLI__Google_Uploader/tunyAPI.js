require('dotenv').config();
const fetch = require('node-fetch');

const shortenUrl = async (longUrl) => {
	const response = await fetch('https://api.tinyurl.com/create', {
		method: 'POST',
		headers: {
			Authorization: `Bearer ${process.env.TINYURL_API_TOKEN}`, // Ваш API токен
			'Content-Type': 'application/json',
		},
		body: JSON.stringify({
			url: longUrl,
			domain: 'tiny.one',
		}),
	});

	const data = await response.json();
	return data.data.tiny_url;
};

module.exports = { shortenUrl };
