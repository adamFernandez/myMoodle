// create activity title span to control spacing between activity number and title text
$("li.activity span.instancename").each(function() {
  if ($(this).text().match(/[1-9]{1}.[0-9]+\s{1}/g)) $(this).html(function(i, currentText) {
    return currentText.replace(/ |&nbsp;/, "</span><span class='activity-title'>");
  });
});
