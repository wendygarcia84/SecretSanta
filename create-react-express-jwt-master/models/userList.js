const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const bcrypt = require("bcrypt-nodejs");

const userListSchema = new Schema({
  usersList: {
    type: String,
    trim: true
  },
  body: {
    type: String
  },
  linkaddress: {
    type: String
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

const User = mongoose.model("User", userListSchema);

module.exports = User;
