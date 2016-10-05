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

    $('#arts').on('click', '.delete-art', handleArtDeleteClick);
    $('#arts').on('click', '.edit-art', handleArtEditClick);
    $('#arts').on('click', '.save-art', handleSaveChangesClick);
  });




function renderArt(art) {
  console.log('rendering art:', art);
  var artHtml = $('#arts-template').html();
  var artsTemplate = Handlebars.compile(artHtml);
  var html = artsTemplate(art);
  $('#arts').prepend(html);
}


function handleArtDeleteClick(e) {
  console.log("DELETE CALLED");
  var artId = $(this).parents('.art').data('art-id');
  console.log('someone wants to delete art id=' + artId );
  $.ajax({
    url: '/api/arts/' + artId,
    method: 'DELETE',
    success: handleArtDeleteSuccess
  });
}


function handleArtDeleteSuccess(art) {
  var deletedArt = art;
  console.log('removing the following art from the page:', deletedArt);
  var divToRemove = 'div[data-art-id=' + deletedArt._id + ']';
  console.log(divToRemove);
  $(divToRemove).remove();
}



function handleArtEditClick(e) {
  var $artRow = $(this).closest('.art');
  var artId = $artRow.data('art-id');
  console.log('edit art', artId);

  // show the save changes button
  $artRow.find('.save-art').toggleClass('hidden');
  // hide the edit button
  $artRow.find('.edit-art').toggleClass('hidden');



  var info = $artRow.find('span.art-info').text();
  $artRow.find('span.art-info').html('<input class="edit-art-info" value="' + info + '"></input>');


  var year = $artRow.find('span.art-year').text();
  $artRow.find('span.art-year').html('<input class="edit-art-year" value="' + year + '"></input>');

}


function handleSaveChangesClick(e) {
  var artId = $(this).parents('.art').data('art-id'); // $(this).closest would have worked fine too
  var $artRow = $('[data-art-id=' + artId + ']');

  var data = {
    info: $artRow.find('.edit-art-info').val(),
    year: $artRow.find('.edit-art-year').val()
  };
  console.log('PUTing data for art', artId, 'with data', data);

  $.ajax({
    method: 'PUT',
    url: '/api/arts/' + artId,
    data: data,
    success: handleArtUpdatedResponse
  });
}

function handleArtUpdatedResponse(data) {
  console.log('response to update', data);

  var artId = data._id;
  // scratch this  from the page
  $('[data-art-id=' + artId + ']').remove();
  // and then re-draw it with the updates ;-)
  renderArt(data);

  // BONUS: scroll the change into view ;-)
  $('[data-art-id=' + artId + ']')[0].scrollIntoView();
}
