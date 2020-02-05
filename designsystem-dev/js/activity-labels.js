// label code
$("li.activity .activityinstance a:not(.quickeditlink)").append('<div class="activity-label-container"><div class="activity-label"><i></i><span class="label-text"></span></div><div class="group-icon"><i></i></div><div class="media-icon"><i></i></div></div>');

// move .accesshide from within .instancename and append to .activityinstance
// affected the prefix title modification in original location
$("li.activity .instancename .accesshide").each(function() {
    $(this).parents(".activityinstance").prepend(this);
});

// set defaults
// study type no icon
// 'file' activity type has 'resource' class
$("li.activity.book, li.activity.folder, li.activity.page, li.activity.resource, li.activity.glossary, li.activity.lesson, li.activity.lti, li.activity.url").addClass("type-study");
// study type with icon
$("li.activity.kalvidres").addClass("type-study i-media");
// activity type no icon
$("li.activity.assign, li.activity.choice, li.activity.feedback, li.activity.hvp, li.activity.kalvidassign, li.activity.oublog, li.activity.questionnaire, li.activity.quiz, li.activity.turnitintooltwo, li.activity.workshop").addClass("type-activity");
// activity type with icon
$("li.activity.data, li.activity.forum, li.activity.connecthosted, li.activity.wiki").addClass("type-activity i-group");

// add assessed label
$("li.activity .instancename:contains('-ass')").parents("li.activity").removeClass("type-study type-activity").addClass("type-assessed");
// override activity type
$("li.activity .instancename:contains('-act')").parents("li.activity").removeClass("type-study type-assessed").addClass("type-activity");
// remove activity label
$("li.activity .instancename:contains('-stu')").parents("li.activity").removeClass("type-activity type-assessed").addClass("type-study");
// add or remove icon
$("li.activity .instancename:contains('-gro')").parents("li.activity").addClass("i-group");
$("li.activity .instancename:contains('-ngr')").parents("li.activity").removeClass("i-group");
$("li.activity .instancename:contains('-med')").parents("li.activity").addClass("i-media");
$("li.activity .instancename:contains('-nme')").parents("li.activity").removeClass("i-media");

// strip keywords from activity title
$("li.activity .instancename:contains('activity-label'), #region-main h2:first-of-type:contains('activity-label'), .breadcrumb li a span:contains('activity-label'), .breadcrumb li a:contains('activity-label'), .row-fluid.rtl-compatible .span4 a:contains('activity-label')").text(function(i, currentText) {
  return currentText.substr(27);
})

// add indent class and remove keyword
$("li.activity .instancename:contains('-indent'), li.activity.label span:contains('-indent')").text(function(i, currentText) {
//  return currentText.substr(11, 1) + '.' + currentText.substr(8);
  return currentText.substr(8);
}).parents("li.activity").addClass("indent");
$("#region-main h2:first-of-type:contains('-indent'), .breadcrumb li a span:contains('-indent'), .breadcrumb li a:contains('-indent'), .row-fluid.rtl-compatible .span4 a:contains('-indent')").text(function(i, currentText) {
  return currentText.substr(8);
})

// add assessed text to assessed type label
$("li.activity.type-assessed .activityinstance a .activity-label-container .activity-label .label-text").text("assessed");
// add activity text to activity type label
$("li.activity.type-activity .activityinstance a .activity-label-container .activity-label .label-text").text("activity");
// add group icon to activity type label
$("li.activity.i-group .activityinstance a .activity-label-container .group-icon i").addClass("fas fa-user-friends");
// add media icon
$("li.activity.i-media .activityinstance a .activity-label-container .media-icon i").addClass("fas fa-play-circle");
