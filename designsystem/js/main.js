// toggle view close transcript button
$(document).on("click", ".view-close-transcript", function(event) {
  $(this).text($(this).text() == 'View transcript' ? 'Hide transcript' : 'View transcript');
});

$(document).on("click", "#blcok-region-side-post.block:not(.block_fake) .title h2", function(event) {
  $(this).parents().block.toggleClass('hidden');
});
