/************
 * DATABASE *
 ************/

var db = require('../models');

function index(req, res) {
  db.Art.find({}, function(err, allArts) {
  res.json(allArts);
  });
}

function show(req, res) {
  db.Art.findById(req.params.artId, function(err, foundArt) {
    if(err) { console.log('artsController.show error', err); }
    console.log('artsController.show responding with', foundArt);
    res.json(foundArt);
  });
}

function create(req, res) {
  console.log('body', req.body);
  db.Art.create(req.body, function(err, art) {
    if (err) { console.log('error', err); }
    console.log(art);
    res.json(art);
  });
}

function destroy(req, res) {
  var artId = req.params.artId;
  console.log("DESTROYING Art...");
  db.Art.findOneAndRemove({ _id: artId }, function(err, foundArt){
    // note you could send just send 204, but we're sending 200 and the deleted entity

    console.log("DESTROYED Art SUCCESS: " , foundArt);
    res.json(foundArt);
  });
}

function update(req, res) {
  console.log('updating with data', req.body);
  db.Art.findById(req.params.artId, function(err, foundArt) {
    if(err) { console.log('artsController.update error', err); }
    foundArt.info = req.body.info;
    foundArt.year = req.body.year;
    foundArt.save(function(err, savedArt) {
      if(err) { console.log('saving altered art failed'); }
      res.json(savedArt);
    });
});
}


// export public methods here
module.exports = {
  index: index,
  create: create,
  show: show,
  destroy: destroy,
  update: update
};
