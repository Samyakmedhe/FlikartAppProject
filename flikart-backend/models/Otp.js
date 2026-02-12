const mongoose = require('mongoose');

const OtpSchema = new mongoose.Schema({
  contact: { type: String, required: true }, // email or phone
  code: { type: String, required: true },
  kind: { type: String, enum: ['email', 'phone'], required: true },
  createdAt: { type: Date, default: Date.now, index: { expires: 60 * 5 } } // TTL: 5 minutes
});

// Ensure TTL index exists (mongoose will create it on startup)
OtpSchema.index({ createdAt: 1 }, { expireAfterSeconds: 60 * 5 });

module.exports = mongoose.model('Otp', OtpSchema);
