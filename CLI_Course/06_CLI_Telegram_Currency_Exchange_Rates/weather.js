require('dotenv').config();


const apiKey = process.env.OPENWEATHER_API_KEY;
const city = 'Odessa'
const url = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apiKey}&units=metric&lang=ru&cnt=40`;

const filterData3Hours = (data) => data.list;
const filterData6Hours = (data) => data.list.filter((_, index) => index % 2 === 0);
const formatWeatherData = (data, city) => {
	const days = {};

	data.forEach(forecast => {
		const date = new Date(forecast.dt * 1000);
		const day = date.toLocaleDateString('ru-RU', {
			weekday: 'long',
			day: 'numeric',
			month: 'long'
		});
		const time = date.toLocaleTimeString('ru-RU', {
			hour: '2-digit',
			minute: '2-digit'
		});

		const temp = forecast.main.temp;
		const feelsLike = forecast.main.feels_like;
		const weatherDescription = forecast.weather[0].description;

		if (!days[day]) {
			days[day] = [];
		}

		days[day].push(`${time}, +${temp.toFixed(0)}°C, ощущается: +${feelsLike.toFixed(0)}°C, ${weatherDescription}`);
	});

	let result = `Погода в ${city}:\n\n`;
	Object.keys(days).forEach(day => {
		result += `${day}:\n`;
		days[day].forEach(entry => {
			result += `  ${entry}\n`;
		});
		result += '\n';
	});

	return result;
};

const getWeatherData = async (interval) => {

	const response = await fetch(url);
	const data = await response.json();
	const city = data.city.name;

	let filteredData;
	if (interval === 3) {
		filteredData = filterData3Hours(data);
	} else if (interval === 6) {
		filteredData = filterData6Hours(data);
	}

	const formattedData = formatWeatherData(filteredData, city);
	return formattedData
};

module.exports = { getWeatherData, city };

