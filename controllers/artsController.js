/************
 * DATABASE *
 ************/

var db = require('../models');

function index(req, res) {
  db.Art.find({}, function(err, allArts) {
  res.json(allArts);
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

// export public methods here
module.exports = {
  index: index,
  create: create
  // show: show,
  // destroy: destroy,
  // update: update
};
