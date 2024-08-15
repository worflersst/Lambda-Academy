const funk3 = (array) => {
	const uniqueFlatArray = [...new Set(array)];
	const victory = uniqueFlatArray.reduce((acc, thisArray, index) => {
		acc[thisArray] = index + 1;
		return acc;
	}, {});

	const filteredVictory = Object.entries(victory)
		.filter(([key, value]) => value < 10)
		.reduce((acc, [key, value]) => {
			acc[key] = value;
			return acc;
		}, {});

	return Object.keys(filteredVictory).length;
};

module.exports = {
	funk3
};
