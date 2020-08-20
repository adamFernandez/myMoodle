// hide custom code block when not in editing mode
$('body:not(.editing) #block-region-side-pre .block:has(.header .title h2:contains("Custom code")), body:not(.editing) #block-region-side-post .block:has(.header .title h2:contains("Custom code"))').addClass('hide');

// move add a block block to the left
$("#block-region-side-post .block:has(h5.card-title:contains('Add a block'))").prependTo("#block-region-side-pre");
// if there are no visible blocks in aside hide it and make main region full width
$("#block-region-side-post:not(:has(.block:not(.hide)))").addClass("hide").parents("body").addClass("empty-region-side-post used-region-side-pre");

$(".download-transcript").click(function() {
  console.log("foo");
  var printContent = $(this).parents('.transcript-container').children('.transcript-card').html();
  var printFeatures = 'height=600, width=800';
  var printWindow = window.open('', 'Print_Transcript', printFeatures);
  var is_safari = navigator.userAgent.indexOf('Safari') != -1 && navigator.userAgent.indexOf('Chrome') == -1;
  var is_chrome = navigator.userAgent.indexOf('Safari') != -1 && navigator.userAgent.indexOf('Chrome') != -1;

  printWindow.document.write('<html><head><title>' + document.title  + '</title>');
  if (!is_safari) {
    console.log('not safari');
    printWindow.document.write('<link type="text/css" rel="stylesheet" href="https://git.iddkingsonline.com/designsystem-dev/css/print-book.css">');
  } else {
    console.log('is safari');
  }
  printWindow.document.write('</head><body><div id="page-mod-book-print"><h1>' + document.title  + '</h1>');
  printWindow.document.write(printContent);
  printWindow.document.write('</div></body></html>');
  printWindow.document.close(); // necessary for IE >= 10
  printWindow.focus(); // necessary for IE >= 10
  printWindow.print();
  printWindow.close();
  return true;
})
