require('dotenv').config();

const { google } = require('googleapis');
const { OAuth2Client } = require('google-auth-library');
const fs = require('fs');

const uploadBase = async (path, name, papkaID) => {
	const oauth2Client = new OAuth2Client(
		process.env.GOOGLE_DRIVE_CLIENT_ID,
		process.env.GOOGLE_DRIVE_CLIENT_SECRET,
		process.env.GOOGLE_DRIVE_REDIRECT_URI
	);

	oauth2Client.setCredentials({
		refresh_token: process.env.GOOGLE_DRIVE_REFRESH_TOKEN,
	});

	const service = google.drive({ version: 'v3', auth: oauth2Client });

	const requestBody = {
		name: name,
		parents: [papkaID],
		fields: 'id',
	};

	const media = {
		mimeType: 'image/jpeg',
		body: fs.createReadStream(path),
	};

	try {
		const file = await service.files.create({
			requestBody,
			media: media,
		});
		console.log('File Id:', file.data.id);

		const fileLink = await service.files.get({
			fileId: file.data.id,
			fields: 'webViewLink, webContentLink',
		});

		console.log('File Link:', fileLink.data.webViewLink);
		return fileLink.data.webViewLink;
	} catch (err) {
		throw err;
	}
};

module.exports = { uploadBase };
