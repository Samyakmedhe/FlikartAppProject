const twilioSid = process.env.TWILIO_SID;
const twilioAuth = process.env.TWILIO_AUTH;

let client = null;
if (twilioSid && twilioAuth) {
  const twilio = require('twilio');
  client = twilio(twilioSid, twilioAuth);
}

async function sendSms(to, body) {
  if (!client) {
    throw new Error('Twilio not configured');
  }
  return client.messages.create({
    from: process.env.TWILIO_FROM,
    to,
    body
  });
}

module.exports = { sendSms };
