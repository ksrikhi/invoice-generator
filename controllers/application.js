const pdf = require('html-pdf');
//  const data = require('../mock/data.json');
const getPdfTemplates = require('../helper/pdfTemplate');
const sendEmail = require('../helper/sendEmail');
// const debug = require('../helper/debugger');

const generatePdfAndSendEmail = (req, response, next) => {
  const { body } = req;
  const data = body;
  const html = getPdfTemplates(data);
  //  const html = debug ;
  const options = { 
  "height": '10.5in',
  "width" : "8in",
    "header": {
      "height": '2mm',
        "contents": '<div style="border-top: 15px solid #b24522; width: 100%;"></div>'
  },
  "footer": {
    "height": '5mm',
    "contents": '<div style="border-top: 15px solid #b24522;"></div>'
  }
},

  fileName = `../tmp/invoice${Math.ceil(Math.random(1)*100000)}.pdf`;
  pdf.create(html, options).toFile(fileName, function (err, res) {
    if (err) return response.status(200).send({ type: "error", message: "failed to generate pdf"});
    sendEmail(data, res.filename, response);
    console.log(res)
  });
}


// fileName = `../tmp/invoice${Math.ceil(Math.random(1)*100000)}.pdf`;
// pdf.create(html, options).toFile(fileName, function (err, res) {
//   if (err) return console.log(err);
//   sendEmail(data, res.filename);
//   console.log(res)
// });


// generatePdfAndSendEmail()
module.exports = generatePdfAndSendEmail
