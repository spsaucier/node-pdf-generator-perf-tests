var wkhtmltopdf = require('wkhtmltopdf');
var fs = require('fs');

console.time("pdfgeneration");

for (i = 1; i < 50; i++) {
	// HTML
	wkhtmltopdf('<h1>Test</h1><p>Hello world</p>')
		.pipe(fs.createWriteStream('./results/wkhtmltopdf' + i + '.pdf'));
}

console.timeEnd("pdfgeneration");
