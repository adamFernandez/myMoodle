// strip activity label keywords from activity title
$("#page-mod-book-print #page-content h1:first-of-type:contains('activity-label'), #page-mod-book-print #page-content .book_info td:contains('activity-label')").text(function(i, currentText) {
  return currentText.replace(/activity-label-[a-z]{3}-[a-z]{3}-[a-z]{3} /g, '');
})
if (window.matchMedia('print').matches) {
  $("#page-content h1:first-of-type:contains('activity-label'), #page-content .book_info td:contains('activity-label')").text(function(i, currentText) {
    return currentText.replace(/activity-label-[a-z]{3}-[a-z]{3}-[a-z]{3} /g, '');
  })
}
