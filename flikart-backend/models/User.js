const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  email: { type: String, index: true, sparse: true },
  phone: { type: String, index: true, sparse: true },
  name: { type: String, default: '' },
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('User', UserSchema);
