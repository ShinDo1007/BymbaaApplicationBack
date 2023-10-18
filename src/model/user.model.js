const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
  s_code: { type: String },
  lname: { type: String },
  fname: { type: String },
  phone: { type: String },
  email: { type: String },
  bio: { type: String },
  password: { type: String, required: true },
});

module.exports.User = mongoose.model("User", userSchema);