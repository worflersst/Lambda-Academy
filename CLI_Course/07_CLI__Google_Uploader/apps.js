const { input, confirm } = require('@inquirer/prompts');
const path = require('path');
const fs = require('fs');
const { uploadBase } = require('./googleAPI');
const { shortenUrl } = require('./tunyAPI');

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

	console.log(`Path to file: ${filePath} \nFile Name: ${fileName} \nFile Extension: ${ext}`);

	const changeName = await confirm({ message: `You're uploading the file with the name ${fileName}. \nWould you like to change it?` });

	if (changeName) {
		const newFileNames = await input({ message: 'Enter new file name (WITHOUT extension aka .jpg .png etc.)' });
		fileName = `${newFileNames.trim()}${ext}`;

		console.log({ newFileName: fileName });
	}

	const longUrl = await uploadBase(filePath, fileName, papkaID);

	console.log(`Path to file: ${filePath}`);
	console.log('Successfully uploaded!');

	const shortenLink = await confirm({ message: 'Would you like to shorten the link?' });

	if (shortenLink) {
		const shortUrl = await shortenUrl(longUrl);
		console.log('Your short link is:', shortUrl);
	} else {
		console.log('Your default link is:', longUrl);
	}
}

runs();
