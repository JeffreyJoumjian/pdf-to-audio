const fs = require('fs');
const say = require('say');


// recommended size = 50000 || max size = 200000
// decrease this if your OS throws and error.
const MAX_SIZE = 50000;



// Make sure to manually remove all the additional text before and after the chapters such as toc, indices... before calling this
// Note this might take some time as the create files may be really large
// Optionally decrease the MAX_SIZE to have smaller files
exportAudio();


function exportAudio() {
	let text = fs.readFileSync('./output.txt');
	fs.mkdirSync('./audio', { recursive: true }, (err) => console.log(err));

	let i = 0;
	let numFiles = Math.floor(text.length / MAX_SIZE);
	let remaining = Math.floor(text.length % MAX_SIZE);

	for (i = 0; i < numFiles; i++) {
		let curri = i;

		let part = text.toString().substring(i * MAX_SIZE, (i + 1) * MAX_SIZE);

		say.export(part, 'Samantha', 1, `./audio/part-${curri}.wav`, (err) => {
			err ? console.error(err) : console.log(`Your text has been saved to part-${curri}.wav`);
		});
	}

	// export remaining text to audio
	part = text.toString().substring(i * MAX_SIZE, i * MAX_SIZE + remaining);
	say.export(part, 'Samantha', 1, `./audio/part-${i}.wav`, (err) => {
		err ? console.error(err) : console.log(`Your text has been saved to part-${i}.wav`);
	});
}

