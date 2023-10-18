const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const pictureSchema = new Schema({
  pictureUrl: { type: String }
});

module.exports.Picture = mongoose.model("Picture", pictureSchema);