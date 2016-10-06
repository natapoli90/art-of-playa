/************
 * DATABASE *
 ************/

var db = require('../models');

function index(req, res) {
  db.Art.find({}, function(err, allArts) {
    if(err) {
      console.log('error', err);
    }
    res.json(allArts);
  });
}

function show(req, res) {
  db.Art.findById(req.params.artId, function(err, foundArt) {
    if(err) {
      console.log('artsController.show error', err);
    }
    res.json(foundArt);
  });
}

function create(req, res) {
  console.log('body', req.body);
  db.Art.create(req.body, function(err, art) {
    if (err) {
      console.log('error', err);
    }
    res.json(art);
  });
}

function destroy(req, res) {
  var artId = req.params.artId;
  db.Art.findOneAndRemove({ _id: artId }, function(err, foundArt) {
    if(err) {
      console.log('error', err);
    }
    res.json(foundArt);
  });
}

function update(req, res) {
  db.Art.findById(req.params.artId, function(err, foundArt) {
    if(err) {
      console.log('artsController.update error', err);
    }
    foundArt.info = req.body.info;
    foundArt.year = req.body.year;
    foundArt.save(function(err, savedArt) {
      if(err) {
        console.log('saving altered art failed');
      }
      res.json(savedArt);
    });
  });
}

// export public methods 
module.exports = {
  index: index,
  create: create,
  show: show,
  destroy: destroy,
  update: update
};
