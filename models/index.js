var mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/art-of-playa");
var Art = require('./art.js');
module.exports.Art = Art;
