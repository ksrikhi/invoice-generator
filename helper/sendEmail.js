const sgMail = require('@sendgrid/mail')
sgMail.setApiKey(process.env.SENDGRID_API_KEY)
//https://www.twilio.com/blog/sending-email-attachments-with-sendgrid
const msg = {
  to: 'ksrikhi123@gmail.com',
  from: 'techbyteteam@gmail.com',
  subject: 'Billing Invoice',
  html: '<strong>and easy to do anywhere, even with Node.js</strong>',
}
sgMail
  .send(msg)
  .then(() => {
    console.log('Email sent')
  })
  .catch((error) => {
    console.error(error)
  })
  