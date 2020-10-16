const pdf = require('html-pdf');
// const data = require('../mock/data.json');
const getPdfTemplates = require('../helper/pdfTemplate');
const sendEmail = require('../helper/sendEmail');

const generatePdfAndSendEmail = (req, res, next) => {
  const { body } = req;
  const data = body;
  const html = getPdfTemplates(data);
  const options = { 
  "format": 'Letter',
    "header": {
        "contents": '<div style="border-top: 15px solid #b24522;"></div>'
  },
  "footer": {
    "contents": '<div style="border-top: 15px solid #b24522;"></div>'
  }
},

  fileName = `../tmp/invoice${Math.ceil(Math.random(1)*100000)}.pdf`;
  pdf.create(html, options).toFile(fileName, function (err, res) {
    if (err) return console.log(err);
    sendEmail(data, res.filename);
    console.log(res)
  });
}


module.exports = generatePdfAndSendEmail
