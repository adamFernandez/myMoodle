// hide custom code block when not in editing mode
$("body:not(.editing) #block-region-side-pre .block:has(.header .title h2:contains('Custom code')), body:not(.editing) #block-region-side-post .block:has(.header .title h2:contains('Custom code'))").addClass("hide");

$(".download-transcript").click(function() {
  console.log("foo");
  var printTitle = document.title;
  var printContent = $(this).parents(".transcript-container").children(".transcript-card").html();
  var printWindow = window.open('', 'PRINT', 'height=600, width=800');
  
  printWindow.document.write(
    '<html><head><title>' + document.title  + '</title></head><body><h1>' + document.title  + '</h1>');
  printWindow.document.write(printContent);
  printWindow.document.write('</body></html>');
  $('head').append('<link rel="stylesheet" href="https://git.iddkingsonline.com/designsystem-dev/css/main.css" type="text/css" />');
  //printWindow.document.write(printTitle);
  //printWindow.document.write(printContent);
  printWindow.document.close(); // necessary for IE >= 10
  printWindow.focus(); // necessary for IE >= 10
  printWindow.print();
  printWindow.close();
  return true;
/*  
  var printContent = $(this).parents(".transcript-container").children(".transcript-card").html();
  var printWindow = window.open('', 'PRINT', 'height=600, width=800');
  
  printWindow.document.write(
    '<html><head><title>' + document.title  + '</title><link type="text/css" rel="stylesheet" href="https://git.iddkingsonline.com/designsystem-dev/css/main.css"></head><body><h1>' + document.title  + '</h1>');
  printWindow.document.write(printContent);
  printWindow.document.write('</body></html>');

  printWindow.document.close(); // necessary for IE >= 10
  printWindow.focus(); // necessary for IE >= 10

  printWindow.print();
  printWindow.close();

  return true;
  */
})
