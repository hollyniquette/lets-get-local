const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  username: { type: String, unique: true, default: null },
  password: { type: String, minLength: 8, required: true },
  email: { type: String, unique: true, required: true },
  loggedIn: Boolean,
  token: String,
  createdAt: String,
  updatedAt: String,
});

const User = mongoose.model('User', userSchema);

module.exports = { User };
