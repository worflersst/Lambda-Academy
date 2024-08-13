const funk2 = (data) => {

	const initialSet = new Set(data[0]);

	const intersectionSet = data.slice(1).reduce((acc, currentArray) => {
		const currentSet = new Set(currentArray);
		return new Set([...acc].filter(user => currentSet.has(user)));
	}, initialSet);

	return intersectionSet.size;
}

module.exports = {
	funk2
}
