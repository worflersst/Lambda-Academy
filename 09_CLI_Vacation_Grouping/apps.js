const data = require('./vacation.json')

const result = data.reduce((acc, current) => {
	const userId = current.user._id;
	const existingUser = acc.find(user => user.userId === userId);

	const vacationPeriod = {
		startDate: current.startDate,
		endDate: current.endDate
	};

	if (existingUser) {
		existingUser.weekendDates.push(vacationPeriod);
	} else {
		acc.push({
			userId: userId,
			name: current.user.name,
			weekendDates: [vacationPeriod]
		});
	}

	return acc;
}, []);

console.log(JSON.stringify(result, null, 2));