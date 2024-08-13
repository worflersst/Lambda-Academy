const { readFilesInDirectory } = require("./functions/base");
const { funk1 } = require("./functions/funk1");
const { funk2 } = require("./functions/funk2");
const { funk3 } = require("./functions/funk3");

const pathToDirectory = 'C:\\Users\\38067\\Desktop\\filefortesttusk8';

async function main() {
	const fileDataArrays = await readFilesInDirectory(pathToDirectory);
	// console.log(fileDataArrays);
	const uniqueDataSet = funk1(fileDataArrays);
	console.log(uniqueDataSet);
	const uniqueFor1File = funk2(fileDataArrays);
	console.log(uniqueFor1File);
	const uniqueFor10File = funk3(fileDataArrays)
	console.log(uniqueFor10File);
}
main();
