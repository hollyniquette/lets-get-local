const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  username: { type: String, unique: true, required: true },
  password: { type: String, minLength: 8, required: true },
  email: { type: String, unique: true, required: true },
  loggedIn: Boolean,
  createdAt: String,
  updatedAt: String,
});

const User = mongoose.model('User', userSchema);

module.exports = { User };
