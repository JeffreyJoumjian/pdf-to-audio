const fs = require('fs');
const { readBook, exportAudio } = require('./generateText');



let pdf = fs.readFileSync("/Users/mbp/Desktop/LAU/courses/Fall-2020/SOC-480/Project/Universities Shift to Online Learning.pdf"); // this is the path of the PDF you want to use
getAudioFromText();


async function getAudioFromText() {
	let book = await readBook(pdf);
	if (book)
		exportAudio();
}
