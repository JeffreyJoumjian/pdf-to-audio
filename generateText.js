const fs = require('fs');
const say = require('say');
const pdfParser = require('pdf-parse');

// recommended size = 50000 || max size = 200000
// decrease this if your OS throws and error.
const MAX_SIZE = 200000;
// I recommend you change the speed in your listening software instead of here
const SPEED = 1;

// read pdf and write text to output file
async function readBook(pdf) {

	const parsed = await pdfParser(pdf);
	console.log(parsed.numpages);
	fs.writeFileSync('output.txt', parsed.text, 'utf-8');

	return parsed;
}

function exportAudio() {
	let text = fs.readFileSync('output.txt');
	fs.mkdirSync('./audio', { recursive: true }, (err) => console.log(err));

	let i = 0;
	let numFiles = Math.floor(text.length / MAX_SIZE);
	let remaining = Math.floor(text.length % MAX_SIZE);

	for (i = 0; i < numFiles; i++) {
		let curri = i;

		let part = text.toString().substring(i * MAX_SIZE, (i + 1) * MAX_SIZE);

		say.export(part, 'Samantha', SPEED, `./audio/part-${curri}.wav`, (err) => {
			err ? console.error(err) : console.log(`Your text has been saved to part-${curri}.wav -> ${part.length / 1000}`);
		});
	}

	// export remaining text to audio
	part = text.toString().substring(i * MAX_SIZE, i * MAX_SIZE + remaining);
	say.export(part, 'Samantha', 1, `./audio/part-${i}.wav`, (err) => {
		err ? console.error(err) : console.log(`Your text has been saved to part-${i}.wav`);
	});
}



module.exports = { readBook, exportAudio }