const route = require('express').Router();
const nodemailer = require('nodemailer');
const query = require("../db");

// Nodemailer setup
const emailTransporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'arslandev170@gmail.com', 
    pass: 'uevf bgmr efwc oczz',
  },
});



route.post('/verify-email', async (req, res) => {
  const { id } = req.body;

  try {
    const updatedDeveloper = await query(
      'UPDATE developers SET verified = $1 WHERE id = $2 RETURNING *',
      [true, id]
    );

    if (updatedDeveloper) {
      res.json({ message: 'Email verification successful', developer: updatedDeveloper });
    } else {
      res.status(404).json({ error: 'Developer not found' });
    }
  } catch (error) {
    console.error('Error verifying email', error);
    res.status(500).json({ error: 'Error verifying email' });
  }
});



route.post('/send-otp', async (req, res) => {
  const { email } = req.body;

  const otp = Math.floor(100000 + Math.random() * 900000).toString();


  const mailOptions = {
    from: 'your-email@gmail.com',
    to: email,
    subject: 'OTP Verification',
    text: `Your OTP is: ${otp}`,
  };

  emailTransporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error('Error sending OTP email', error);
      return res.status(500).json({ error: 'Error sending OTP email' });
    }
    res.json({ message: 'OTP sent to email successfully', otp: otp });
  });
});

module.exports = route;
