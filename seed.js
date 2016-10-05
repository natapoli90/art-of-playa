// This file allows us to seed our application with data
// simply run: `node seed.js` from the root of this project folder.

var db = require("./models");

var artsList =[];

artsList.push({
              image: '/images/1.jpg',
              info: 'A 1/3 scale replica of an American Frigate from the late 18th century.',
              year: '2016',
            });
artsList.push({
            image: '/images/2.jpg',
            info: 'Wreckage International creation - The Lost Tea Party.',
            year: '2016',
          });
artsList.push({
              image: '/images/3.jpg',
              info: 'A tribute to Dali.',
              year: '2016',
            });
artsList.push({
              image: '/images/4.jpg',
              info: 'Run boy run.',
              year: '2016',
            });
artsList.push({
              image: '/images/5.jpg',
              info: 'Burners waited in line for the chance to enter "Storied Haven," a giant metal installation in the shape of an old boot created by the Oakland-based artist collective Five Ton Crane.',
              year: '2015',
            });
artsList.push({
              image: '/images/6.jpg',
              info: 'Artist Michael Garlington described his "Totem of Confessions" installation as a tower of mystery overlooking other worlds "and enshrouding a thousand hidden treasures."',
              year: '2015',
            });
artsList.push({
              image: '/images/7.jpg',
              info: 'Art piece By Alexandr Milov. Two adults back to back while their inner child reaches for each other.',
              year: '2015',
            });
artsList.push({
              image: '/images/8.jpg',
              info: 'The amazing (working!) Blunderwood Portable by artist-builder Jason Turgeon.',
              year: '2015',
            });
artsList.push({
              image: '/images/9.jpg',
              info: 'Yes, it is a car. And yes, it is on fire.',
              year: '2016',
            });
artsList.push({
              image: '/images/10.jpg',
              info: 'On the way to freedom.',
              year: '2016',
            });
artsList.push({
              image: '/images/11.jpg',
              info: 'The sign says "Climb at your own risk". You bet.',
              year: '2016',
            });
artsList.push({
              image: '/images/12.jpg',
              info: 'Artist Marco Cochrane was back with the third in his series of sculptures, this one titled R-Evolution. At 48 feet woman, it wasnt quite as tall as the Man, but was more graceful and evocative.',
              year: '2015',
            });

db.Art.remove({}, function(err, arts){

  db.Art.create(artsList, function(err, arts){
    if (err) { return console.log('ERROR', err); }
    console.log("all arts:", arts);
    console.log("created", arts.length, "arts");
    process.exit();
  });

});
