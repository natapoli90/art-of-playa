// This file allows us to seed our application with data
// simply run: `node seed.js` from the root of this project folder.

var db = require("./models");

var artsList =[
  // put data here!
];

db.Art.remove({}, function(err, arts){

  db.Art.create(artsList, function(err, arts){
    if (err) { return console.log('ERROR', err); }
    console.log("all albums:", arts);
    console.log("created", arts.length, "arts");
    process.exit();
  });

});
