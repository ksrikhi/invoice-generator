const fs = require("fs");
const sgMail = require('@sendgrid/mail');
const getEmailTemplates = require('./emailTemplate')

const deletePdfFile = (filePath) => fs.unlinkSync(filePath);

const sendEmail = (data, filePath, response) => {
  attachment = fs.readFileSync(filePath).toString("base64");
  sgMail.setApiKey(process.env.SENDGRID_API_KEY)
  const msg = {
    to: data.billingDetail.email,
    from: data.profileDetail.email,
    subject: 'Billing Invoice',
    html: getEmailTemplates(data),
    attachments: [
      {
        content: attachment,
        filename: "invoice.pdf",
        type: "application/pdf",
        disposition: "attachment"
      }
    ]
  }
  sgMail
    .send(msg)  
    .then(() => {
      deletePdfFile(filePath);
      response.status(200).send('Email sent successfully');
      console.log("Message sent! ");
    })
    .catch((error) => {
      deletePdfFile(filePath);
      response.status(401).send("something is wrong");
      console.log(error + "something strange...");
    })
}

module.exports = sendEmail