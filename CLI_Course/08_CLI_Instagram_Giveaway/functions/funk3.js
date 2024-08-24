const funk3 = (filesArray) => {
	const nameFileCount = {};
	filesArray.forEach(fileArray => {
		const uniqueNames = new Set(fileArray);
		uniqueNames.forEach(name => {
			if (!nameFileCount[name]) {
				nameFileCount[name] = 0;
			}
			nameFileCount[name] += 1;
		});
	});
	const userNamesInAtLeast10Files = Object.keys(nameFileCount).filter(name => nameFileCount[name] >= 10);
	return userNamesInAtLeast10Files.length;
};

module.exports = {
	funk3
};
