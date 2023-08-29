const mongoose = require('mongoose');

const eventSchema = new mongoose.Schema({
  name: String,
  description: String,
  date: String,
  time: String,
  location: String,
  image: String,
  category: String,
  createdAt: String,
  updatedAt: String,
});

const Event = mongoose.model('Event', eventSchema);

module.exports = { Event };
