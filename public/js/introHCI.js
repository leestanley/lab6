'use strict';

// Call this function when the page loads (the "ready" event)
$(document).ready(function () {
  initializePage();
});

/*
 * Function that is called when the document is ready.
 */
function initializePage() {
  $('.project a').click(addProjectDetails);

  // $('#colorBtn').click(randomizeColors);
}

/*
 * Make an AJAX call to retrieve project details and add it in
 */
function addProjectDetails(e) {
  // Prevent following the link
  e.preventDefault();

  var projectID = $(this).closest('.project').attr('id');

  var idNumber = projectID.substr('project'.length);

  $.get('/project/' + idNumber, function (result) {
    var input =
      '<img src="' +
      result.image +
      '" class="detailsImage"' +
      '<h2>' +
      result.title +
      '</h2>' +
      '<h3>' +
      result.date +
      '</h3>' +
      '<p>' +
      result.summary +
      '</p>';
    $('#project' + idNumber + ' .details').html(input + result.summary);
  });
}
