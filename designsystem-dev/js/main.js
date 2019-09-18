// toggle side bar menus
const blockHide = "#block-region-side-pre .block .title h2, #block-region-side-post .block .title h2";
$(document).on("click", blockHide, function(event) {
  $(this).parents(".block").toggleClass('hidden');
});

// hide carousel controls on first and last slide
$(document).on("click", ".carousel-control-prev, .carousel-control-next", function(event) {
  $(this).parents(".carousel").removeClass("start").removeClass("finish");
  if ($(this).hasClass("carousel-control-prev") && $(".carousel-item:nth-child(2)").hasClass("active")) {
    $(this).parents(".carousel").addClass("start");
  } else if ($(this).hasClass("carousel-control-next") && $(".carousel-item:nth-last-child(2)").hasClass("active")) {
    $(this).parents(".carousel").addClass("finish");
  }
});

// hide and show collapse card
$(document).on("click", ".collapse-card .collapse-header button", function(event) {
  $(this).parents(".collapse-card").toggleClass("collapsed");
});

// toggle transcript button text and transcript card
$(document).on("click", ".transcript-button-group a.view-close-transcript", function(event) {
  $(this).text($(this).text() == 'View transcript' ? 'Hide transcript' : 'View transcript');
  $(this).parents(".transcript-container").toggleClass("collapsed");
});

// toggle view answer button text and answer card
$(document).on("click", "a.view-hide-answer", function(event) {
  $(this).text($(this).text() == 'View answer' ? 'Hide answer' : 'View answer');
  $(this).parents(".view-answer-container").toggleClass("collapsed");
});

// home page add forum class to activtiy title containing 'discussion'
$("li.activity .instancename:contains('Discussion')").parents("li.activity").addClass("forum");      