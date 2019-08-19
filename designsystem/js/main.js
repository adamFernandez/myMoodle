// toggle view close transcript button
$(document).on("click", ".view-close-transcript", function(event) {
  $(this).text($(this).text() == 'View transcript' ? 'Hide transcript' : 'View transcript');
});

// toggle side bar menus
$(document).on("click", "#block-region-side-post .block .title h2", function(event) {
  $(this).parents(".block").toggleClass('hidden');
});
  