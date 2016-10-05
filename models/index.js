var mongoose = require("mongoose");
mongoose.connect( process.env.MONGODB_URI || "mongodb://localhost/art-of-playa");

var Art = require('./art.js');
module.exports.Art = Art;
