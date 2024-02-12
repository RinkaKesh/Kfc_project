// otpRoute.js
const express = require('express');
const bodyParser = require('body-parser');
const { sendOTP, verifyOTP } = require('./Otp.js');

const OtpRouter = express.Router();
OtpRouter.use(bodyParser.json());

OtpRouter.post('/send-otp', sendOTP);
OtpRouter.post('/verify-otp', verifyOTP);

module.exports = OtpRouter;
