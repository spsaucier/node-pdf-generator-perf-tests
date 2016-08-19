var PDFDocument = require('pdfkit');
var fs = require('fs');

console.time("pdfgeneration");

for (i = 1; i < 100; i++) {
	var doc = new PDFDocument;

	doc.pipe(fs.createWriteStream('pdfkit.pdf'));
	 
	doc.fontSize(25)
		.text('Test');
	doc.fontSize(16)
		.text('Hello World');

	doc.end()
}

console.timeEnd("pdfgeneration");
