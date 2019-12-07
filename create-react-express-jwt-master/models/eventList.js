const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const bcrypt = require("bcrypt-nodejs");

const eventSchema = new Schema({
  eventName: {
    type: String,
    trim: true
  },
  body: {
    type: String
  },
  createdAt: {
    type: Date,
    default: Date.now
  },
  pin: {
      code: Integer
  }
});

const User = mongoose.model("eventList", eventSchema);

module.exports = eventList;
