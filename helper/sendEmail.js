const fs = require("fs");
const sgMail = require('@sendgrid/mail');
const getEmailTemplates = require('./emailTemplate')

const deletePdfFile = (filePath) => fs.unlinkSync(filePath);

const sendEmail = (data, filePath) => {
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
      console.error('Email sent successfully')
    })
    .catch((error) => {
      deletePdfFile(filePath);
      console.error(error)
    })
}

module.exports = sendEmail