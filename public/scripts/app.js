/* CLIENT-SIDE JS
 *
 * You may edit this file as you see fit.  Try to separate different components
 * into functions and objects as needed.
 *
 */



$(document).ready(function() {
  console.log('app.js loaded!');


  $.get('/api/arts').success(function (arts) {
    arts.forEach(function(art) {
      renderArt(art);
    });
  });

  $('#art-form form').on('submit', function(e) {
      e.preventDefault();
      var formData = $(this).serialize();
      console.log('formData', formData);
      $.post('/api/arts', formData, function(art) {
        console.log('art after POST', art);
        renderArt(art);  //render the server's response
      });
      $(this).trigger("reset");
    });

});





function renderArt(art) {
  console.log('rendering art:', art);
  var artHtml = $('#arts-template').html();
  var artsTemplate = Handlebars.compile(artHtml);
  var html = artsTemplate(art);
  $('#arts').prepend(html);
}
