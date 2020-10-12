const pdf = require('html-pdf');
const data = require('../mock/data.json');
const getPdfTemplates = require('../helper/pdfTemplate')
const getEmailTemplates = require('../helper/emailTemplate');

const generatePdf = () => {
  const html = getPdfTemplates(data);
  const email = getEmailTemplates(data);
  const options = { format: 'Letter' };

  pdf.create(html, options).toFile('./invoice.pdf', function (err, res) {
    if (err) return console.log(err);
    console.log(res); // { filename: '/app/businesscard.pdf' }
  });
}

generatePdf()
module.exports = generatePdf
