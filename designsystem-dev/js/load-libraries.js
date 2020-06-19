//loadjs("https://code.jquery.com/jquery-3.3.1.slim.min.js")
loadjs("https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js");
loadjs("https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js");

// load external JS file into Keats
function loadjs(url) {
  $("#page").append("<script type='text/javascript' src='" + url + "'><script>");
}
