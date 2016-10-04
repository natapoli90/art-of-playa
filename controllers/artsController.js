/************
 * DATABASE *
 ************/

/* hard-coded data */
var arts =[];
artList.push({
              _id:1;
              image: '/images/1.jpg',
              info: 'A 1/3 scale replica of an American Frigate from the late 18th century.',
              year: '2016',
            });
artList.push({
            _id:2;
            image: '/images/2.jpg',
            info: 'Wreckage International creation - The Lost Tea Party.',
            year: '2016',
          });
artList.push({
              _id:3;
              image: '/images/3.jpg',
              info: 'A tribute to Dali.',
              year: '2016',
            });



function index(req, res) {
  // FILL ME IN !
}

function create(req, res) {
  // FILL ME IN !
}

function show(req, res) {
  // FILL ME IN !
}

function destroy(req, res) {
  // FILL ME IN !
}

function update(req, res) {
  // FILL ME IN !
}


// export public methods here
module.exports = {
  index: index,
  create: create,
  show: show,
  destroy: destroy,
  update: update
};
