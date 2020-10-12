const express = require('express');
const application = express.Router();

const applicationController = require('./controllers/application.js');

application.post("/sendEmail", applicationController.sendEmail)
module.exports = application;