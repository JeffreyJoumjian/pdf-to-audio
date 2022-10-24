const fs = require('fs');
const { readBook, exportAudio } = require('./generateText');

async function getAudioFromText(pdf) {
	let book = await readBook(pdf);
	if (book)
		exportAudio();
}

// this is the path of the PDF you want to convert to audio
let pdf = fs.readFileSync("/Users/skylerdj/Desktop/sample.pdf");
// let pdf = fs.readFileSync("absolute/path/to/your_pdf.pdf");

// start the process
getAudioFromText(pdf);