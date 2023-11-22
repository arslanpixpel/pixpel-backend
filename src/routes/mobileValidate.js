const route = require('express').Router();
const AWS = require('aws-sdk');

AWS.config.update({
    accessKeyId: "AKIA2QRNOOF3G2N4S6K6",
    secretAccessKey: "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",
    region : "ap-south-1"
});

const sns = new AWS.SNS();

route.post('/send-otp', async (req, res) => {
  const { number } = req.body;
  const otp = Math.floor(100000 + Math.random() * 900000).toString();
  const smsattrs = {
    'AWS.SNS.SMS.SenderID': { 'DataType': 'String', 'StringValue': 'pixpel' },
    'AWS.SNS.SMS.SMSType': { 'DataType': 'String', 'StringValue': 'Promotional'}
}
  const params = {
    Message: `Your OTP is ${otp}`,
    PhoneNumber: number,
    MessageAttributes: smsattrs  
  };

  try {
    const aws  = await sns.publish(params).promise();
    console.log(`OTP sent successfully to ${number}`);
    res.status(200).json({ message: 'OTP sent successfully', data : aws});
  } catch (error) {
    console.error(`Error sending OTP to ${number}: ${error.message}`);
    res.status(500).json({ error: 'Error sending OTP' });
  }
});

module.exports = route