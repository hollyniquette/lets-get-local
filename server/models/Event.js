const mongoose = require('mongoose');

const eventSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: String,
  date: { type: String, required: true },
  beginTime: String,
  endTime: String,
  location: String,
  image: String,
  type: { type: String, required: true },
  createdAt: String,
  updatedAt: String,
});

const Event = mongoose.model('Event', eventSchema);

module.exports = { Event };
