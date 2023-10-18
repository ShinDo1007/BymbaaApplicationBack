const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const hobbySchema = new Schema({
  name: { type: String },
  icon: { type: String },
  description: { type: String },
});

module.exports.Hobby = mongoose.model("Hobby", hobbySchema);