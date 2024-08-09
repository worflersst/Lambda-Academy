const { input, confirm } = require('@inquirer/prompts');
const path = require('path');
const fs = require('fs');
const { uploadBase } = require('./googleAPI');

const papkaID = '1WCvAsoE_8tnP4IiSfa0HKg4E8y1vSmDp';

async function runs() {
	const answer = await input({ message: 'Drag and drop your image to terminal and press Enter for upload' });
	let filePath = answer.trim().replace(/['"]+/g, '');

	filePath = filePath.replace(/^&\s*/, '');

	if (!fs.existsSync(filePath)) {
		console.error("File does not exist:", filePath);
		return;
	}

	let fileName = path.basename(filePath);
	const ext = path.extname(filePath);

	console.log(`File Path: ${filePath} \nFile Name: ${fileName} \nFile Extension: ${ext}`);

	const changeName = await confirm({ message: `You're uploading the file with the name ${fileName}. \nWould you like to change it?` });

	if (changeName) {
		const newFileNames = await input({ message: 'Enter new file name (WITHOUT extension aka .jpg .png etc.)' });
		fileName = `${newFileNames.trim()}${ext}`;
	}

	uploadBase(filePath, fileName, papkaID);
}

runs();
