/* CLIENT-SIDE JS
 *
 * You may edit this file as you see fit.  Try to separate different components
 * into functions and objects as needed.
 *
 */


/* hard-coded data! */
var sampleArts =[];
sampleArts.push({
              image: '/images/1.jpg',
              info: 'A 1/3 scale replica of an American Frigate from the late 18th century.',
              year: '2016',
            });
sampleArts.push({
            image: '/images/2.jpg',
            info: 'Wreckage International creation - The Lost Tea Party.',
            year: '2016',
          });
sampleArts.push({
              image: '/images/3.jpg',
              info: 'A tribute to Dali.',
              year: '2016',
            });


$(document).ready(function() {
  console.log('app.js loaded!');
});





function renderArt(art) {
  console.log('rendering art:', art);
  var artHtml = $('#arts-template').html();
  var artsTemplate = Handlebars.compile(artHtml);
  var html = artsTemplate(art);
  $('#arts').prepend(html);
}
