const fs = require('fs/promises');
const path = require('path');

async function processFiles(filePaths) {
	const fileDataPromises = filePaths.map(async (filePath) => {
		const data = await fs.readFile(filePath, 'utf8');
		return data.split('\n');
	});
	const fileDataArrays = await Promise.all(fileDataPromises);
	return fileDataArrays;
}

async function readFilesInDirectory(directoryPath) {
	const files = await fs.readdir(directoryPath);
	const filePaths = files.map(file => path.join(directoryPath, file));
	const allFileData = await processFiles(filePaths);
	return allFileData;
}

module.exports = {
	readFilesInDirectory
};
