import express from 'express';
import { sendEmailOTP } from '../services/email.js';
const router = express.Router();

let otpStore = {}; // Temporary in-memory OTP store

// Send Email OTP
router.post('/send-email-otp', async (req, res) => {
  const { email } = req.body;
  if (!email) return res.status(400).json({ message: 'Email required' });

  const otp = Math.floor(100000 + Math.random() * 900000); // 6-digit OTP
  otpStore[email] = otp;

  try {
    await sendEmailOTP(email, otp);
    res.json({ message: 'OTP sent successfully!' });
  } catch (err) {
    res.status(500).json({ message: 'Failed to send OTP', error: err.message });
  }
});

// Verify OTP
router.post('/verify-email-otp', (req, res) => {
  const { email, otp } = req.body;
  if (!email || !otp) return res.status(400).json({ message: 'Email and OTP required' });

  if (otpStore[email] && otpStore[email].toString() === otp.toString()) {
    delete otpStore[email]; // OTP used
    res.json({ message: 'Login successful!' });
  } else {
    res.status(400).json({ message: 'Invalid OTP' });
  }
});

export default router;
