# Node PDF Generator Performance Tests

Setup:
* `npm install`
* Install [wkHTMLtoPDF](http://wkhtmltopdf.org/downloads.html)
* Install [Prince XML](http://www.princexml.com/download/)
* Install [WeasyPrint](http://weasyprint.readthedocs.io/en/latest/install.html)

To build 50 simple files:
* All at once: `node run test`
* [PDFkit](http://pdfkit.org/): `node ./pdfkit.js`
* [lx-PDF](https://github.com/litixsoft/lx-pdf): `node ./lx-pdf.js` - PDFkit + JSON templates for formatting
* [node wkHTMLtoPDF](https://www.npmjs.com/package/wkhtmltopdf): `node ./wkhtmltopdf.js` - Webkit engine
* [Prince](http://www.princexml.com/doc/): `time ./prince.sh`
* [WeasyPrint](http://weasyprint.readthedocs.io/en/latest/index.html): `. ./venv/bin/activate && time ./weasyprint.sh`

In-browser options:
* [PDFmake](https://github.com/bpampuch/pdfmake) - [playground](http://pdfmake.org/playground.html) - 42ms reported for 1 simple PDF
* [hPDF](https://github.com/manuels/hpdf.js) - [playground](http://manuels.github.io/hpdf.js/) - 44.5ms reported for 1 simple PDF
* [jsPDF](https://parall.ax/products/jspdf) - Appears fast, lots of capability

Third-party options:
* [DocRaptor](http://docraptor.com/) HTML to PDF - Hosted, "99.99% uptime, infinite throughput"
* [PDF Reactor](http://www.pdfreactor.com/) HTML to PDF - Not hosted, purchase is per-CPU, no simple way to test performance