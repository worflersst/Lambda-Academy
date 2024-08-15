const getCurrencyRates = async () => {
	const response = await fetch('https://api.privatbank.ua/p24api/pubinfo?exchange&coursid=11');
	const data = await response.json();
	return data;
};

module.exports = { getCurrencyRates }