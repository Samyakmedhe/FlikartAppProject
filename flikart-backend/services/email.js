import nodemailer from 'nodemailer';
import dotenv from 'dotenv';
dotenv.config();

const transporter = nodemailer.createTransport({
  host: process.env.EMAIL_HOST,
  port: process.env.EMAIL_PORT,
  secure: process.env.EMAIL_SECURE === 'true',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
    
    
  },
});

export const sendEmailOTP = async (email, otp) => {
  const mailOptions = {
    from: process.env.EMAIL_FROM,
    to: email,
    subject: 'Your Flipkart Clone OTP',
    html: `<p>Your OTP is: <b>${otp}</b></p>`,
  };

  try {
    await transporter.sendMail(mailOptions);
    console.log('OTP Email sent to', email);
    return true;
  } catch (err) {
    console.error('Error sending OTP email:', err);
    throw err;
  }
};
