var PdfPrinter = require('./libs/pdfmake-master/src/printer.js');
var fs = require('fs');

console.time("pdfmake");

for (i = 1; i < 50; i++) {
	var fonts = {
		Roboto: {
			normal: 'fonts/Roboto-Regular.ttf',
			bold: 'fonts/Roboto-Medium.ttf',
			italics: 'fonts/Roboto-Italic.ttf',
			bolditalics: 'fonts/Roboto-Italic.ttf'
		}
	};

	var printer = new PdfPrinter(fonts);

	var docDefinition = {
		content: [
			'Test',
			'Hello World'
		]
	};

	var pdfDoc = printer.createPdfKitDocument(docDefinition);
	pdfDoc.pipe(fs.createWriteStream('results/pdfMake' + i + '.pdf')).on('finish', function () {
		res.send(true);
	});
}

console.timeEnd("pdfmake");
