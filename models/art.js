var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var ArtSchema = new Schema({
  image: String,
  info: String,
  year: String,
});

var Art = mongoose.model('Art', ArtSchema);
module.exports = Art;
