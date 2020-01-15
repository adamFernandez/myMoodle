// label code
$("li.activity .activityinstance a").append('<div class="activity-label"><div class="assessed-label">Assessed</div><div class="primary-label"><i></i><span class="label-text"></span></div><div class="media-icon"><i></i></div></div>');

// study type no icon
// 'file' activity type has 'resource' class
$("li.activity.page,  li.activity.book, li.activity.folder, li.activity.page, li.activity.resource, li.activity.glossary, li.activity.lesson, li.activity.lti").addClass("type-study");
// study type with icon
$("li.activity.kalvidres, li.activity.url").addClass("type-study media");
// activity type no icon
$("li.activity.assign, li.activity.choice, li.activity.feedback, li.activity.hvp, li.activity.kalvidassign, li.activity.oublog, li.activity.questionnaire, li.activity.quiz, li.activity.turnitintooltwo, li.activity.workshop").addClass("type-activity");
// activity type with icon
$("li.activity.data, li.activity.forum, li.activity.connecthosted, li.activity.wiki").addClass("type-activity icon");

// add assessed label
$("li.activity .instancename:contains('-ass')").parents("li.activity").addClass("type-assessed");
// override activity type
$("li.activity .instancename:contains('-act')").parents("li.activity").removeClass("type-study").addClass("type-activity");
// add icon
$("li.activity .instancename:contains('-ico')").parents("li.activity").addClass("icon");
$("li.activity .instancename:contains('-med')").parents("li.activity").addClass("media");
// strip keywords
$("li.activity .instancename:contains('activity-label')").text(function(i, currentText) {
  return currentText.substring(31);
})

// add study text to study type label
$("li.activity.type-study .activityinstance a .activity-label .primary-label .label-text").text("study");
// add activity text to activity type label
$("li.activity.type-activity .activityinstance a .activity-label .primary-label .label-text").text("activity");
// add group icon to activity type label
$("li.activity.type-activity.icon .activityinstance a .activity-label .primary-label i").addClass("fas fa-user-friends");
// add media icon
$("li.activity.media .activityinstance a .activity-label .media-icon i").addClass("fas fa-play-circle");
