const fs = require('fs');
const pdfParser = require('pdf-parse');

let pdf = fs.readFileSync("./your_pdf.pdf"); // this is the path of the PDF you want to use
readBook(pdf);

// read pdf and write text to output file
function readBook(pdf) {
	pdfParser(pdf).then((book) => {

		console.log(book.numpages);
		fs.writeFileSync('./output.txt', book.text, 'utf-8');

	}).catch((err) => console.log(err));
}