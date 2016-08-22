var fs = require('fs');

console.time("lx-pdf");

for (i = 1; i < 50; i++) {
	var lxDocument = require('lx-pdf')('lx-pdf-template.json');

	var subject = 'Test';
	lxDocument.addContent('subject', subject);
	var text = 'Hello World';
	lxDocument.addContent('content', text);

	// Save document to local storage
	lxDocument.save('./results/lx-pdf' + i + '.pdf', function(result) {});
}

console.timeEnd("lx-pdf");
