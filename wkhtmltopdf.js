var wkhtmltopdf = require('wkhtmltopdf');
var fs = require('fs');

console.time("pdfgeneration");

for (i = 1; i < 100; i++) {
	// HTML
	wkhtmltopdf('<h1>Test</h1><p>Hello world</p>')
		.pipe(fs.createWriteStream('wkhtmltopdf.pdf'));
}

console.timeEnd("pdfgeneration");
