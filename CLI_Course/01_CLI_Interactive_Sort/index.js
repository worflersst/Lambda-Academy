const { stdin: input, stdout: output } = require('process')
const readLine = require('readline')

let rl = readLine.createInterface({
	input, output
})

let sortedMassive = []
let step = 0;
let accesValue = 10;

const variantSort = {
	a: "Enter 'a': Sort the words alphabetically.\n",
	b: "Enter 'b': Display the numbers in ascending order.\n",
	c: "Enter 'c': Display the numbers in descending order.\n",
	d: "Enter 'd': Display the words in ascending order based on the number of letters in each word.\n",
	e: "Enter 'e': Show only unique words.\n",
	f: "Enter 'f': Show only the unique values from the entire set of words and numbers entered by the user.\n",
	exit: "Enter 'Exit': For exit programm. \n"
};

const variantFunc = () => {
	console.log(variantSort.a, variantSort.b, variantSort.c, variantSort.d, variantSort.e, variantSort.f, variantSort.exit);
}
const accesValuefn = () => {
	console.log(`Введите ${accesValue} значений через пробел`);
}


console.log(`Введите ${accesValue} значений через пробел`);
rl.on('line', (line) => {

	switch (step) {

		case 0:
			sortedMassive.length = 0
			let moment = line.trim().split(' ')

			if (moment.length !== accesValue) {
				console.log(`Нужно ввести именно ${accesValue} значений:(`);
			} else {
				moment.forEach((value) => {
					if (isNaN(value)) {
						sortedMassive.push(value)
					} else {
						sortedMassive.push(parseFloat(value))
					}
				})
				console.log(sortedMassive);
				step++
				variantFunc()
			}
			break;

		case 1:
			switch (line) {
				case 'a': {
					// Sort the words alphabetically ignoring case
					let variantA = sortedMassive
						.filter((item) => typeof item === 'string')
						.sort((a, b) => a.toLowerCase().localeCompare(b.toLowerCase()));

					console.log(`Ты выбрал вариант ${variantSort.a} \n Вот твой массив : ${variantA.join(',')} \n`);
					accesValuefn();
					step--;
					break;
				}

				case 'b': {
					// logick Display the numbers in ascending order.
					let variantB = sortedMassive.filter((item) => typeof item === 'number').sort((a, b) => a - b)
					console.log(`Ты выбрал вариант ${variantSort.b} \n Вот твой массив : ${variantB} \n`)
					accesValuefn()
					step--
					break;
				}
				case 'c': {
					// logick Display the numbers in descending order.
					let variantC = sortedMassive.filter((item) => typeof item === 'number').sort((a, b) => b - a)
					console.log(`Ты выбрал вариант ${variantSort.c} \n Вот твой массив : ${variantC} \n`)
					accesValuefn()
					step--
					break;
				}
				case 'd': {
					// logick Display the words in ascending order based on the number of letters in each word.
					let variantD = sortedMassive.filter((item) => typeof item === 'string').sort((a, b) => a.length - b.length)
					console.log(`Ты выбрал вариант ${variantSort.d} \n Вот твой массив : ${variantD} \n`)
					accesValuefn()
					step--
					break;
				}
				case 'e': {
					// logick Show only unique words.
					let variantE = [...new Set(sortedMassive.filter((item) => typeof item === 'string'))]
					console.log(`Ты выбрал вариант ${variantSort.e} \n Вот твой массив : ${variantE} \n`)
					accesValuefn()
					step--
					break;
				}
				case 'f': {
					// logick Show only the unique values from the entire set of words and numbers entered by the user.
					let countMap = {};
					sortedMassive.forEach(el => {
						countMap[el] = (countMap[el] || 0) + 1;
					});
					let uniqueValues = sortedMassive.filter(el => countMap[el] === 1);

					console.log(`Ты выбрал вариант ${variantSort.f} \n Вот твой массив : ${uniqueValues} \n`);
					accesValuefn();
					step--;
					break;
				}
				case 'Exit': {
					rl.close()
					break;
				}
			}
			break;
	}
})
