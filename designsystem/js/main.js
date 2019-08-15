// toggle view close transcript button
$(document).on("click", ".view-close-transcript", function(event) {
  $(this).text($(this).text() == 'View transcript' ? 'Hide transcript' : 'View transcript');
});
  