const express = require('express');
const application = express.Router();

const generatePdfAndSendEmail = require('../controllers/application');

application.post("/sendEmail", generatePdfAndSendEmail)
module.exports = application;