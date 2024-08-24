import { input, number, select, confirm } from '@inquirer/prompts'

const db = [
	{
		name: 'Nikita', gender: 'Man', age: 18
	},
	{
		name: 'Masha', gender: 'Woman', age: 17
	},
	{
		name: 'Guse', gender: 'Man', age: 15
	}]

const createUser = async () => {
	const name = await input({ message: 'Enter your name' });
	const gender = await select({
		message: 'Gender',
		choices: [
			{
				name: 'Man',
				value: 'Man',
				description: 'Your gender a Man !',
			},
			{
				name: 'Woman',
				value: 'Woman',
				description: 'Your gender a Woman !',
			},
		]
	})
	const age = await number({ message: 'Enter your age' });
	db.push({ name, gender, age });
	console.table(db);

	const addAnother = await confirm({ message: 'Do you want to add another user?' })
	if (addAnother) {
		await createUser()
	} else {
		const searchUser = await confirm({ message: 'Хочешь найти пользователя по Нику ?' })
		if (searchUser) {
			const searchUserName = await input({ message: 'Enter the name of the user you want to find' });
			const user = db.filter((app) => app.name === searchUserName);
			if (user) {
				console.log(`${searchUserName} is found:`, user);
			} else {
				console.log(`${searchUserName} is not found.`);
			}
		}
	}
}

createUser()

