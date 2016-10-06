var mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/art-of-playa");

module.exports.Art = require('./art');
