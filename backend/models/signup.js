const mongoose = require("mongoose");

const signupSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    // unique: true,
    // trim: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    // trim: true,
    lowercase: true,
  },
  password: {
    type: String,
    required: true,
    // trim: true,
  },
});

module.exports = mongoose.model("Signup", signupSchema);