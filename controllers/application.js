const pdf = require('html-pdf');
const data = require('../mock/data.json');
const getPdfTemplates = require('../helper/pdfTemplate');
const sendEmail = require('../helper/sendEmail');

const generatePdf = () => {
  const html = getPdfTemplates(data);
  const options = { format: 'Letter' };
  const fileName = `../tmp/invoice${Math.ceil(Math.random(1)*100000)}.pdf`;
  pdf.create(html, options).toFile(fileName, function (err, res) {
    if (err) return console.log(err);
    sendEmail(data, res.filename);
    console.log(res)
  });
}

generatePdf()
module.exports = generatePdf
