const funk1 = (data) => {
	const flatData = data.flat()
	const setData = new Set(flatData)
	// console.log(setData);
	return setData.size
}

module.exports = {
	funk1
}