function replaceFileIcons(name, location) { //some commit
  $(".activityinstance").each(function(index, value) {
    var instanceName = $(value).eq(0).text();
    if (instanceName.indexOf(name) !== -1) {
      var iconImage = $(this).find("img");
      $(iconImage.first().attr("src", location));
    }
  });
}

function replaceFileIconsByUrl(original, replace) {
  $(".activityinstance").each(function(index, value) {
    var iconImage = $(this).find("img").first();
    if ($(iconImage).attr('src').indexOf(original) !== -1) {
      $(this).find("img").first().css('display', 'none');
      var icon = $("<i class=\"icon-" + replace + " iconlarge\"/>");
      $(this).find('.instancename').css('position', 'absolute');
      $(this).find('.instancename').css('top', '25px');
      $(this).prepend(icon);
    }
  });
}

function loadCSS(url) {
  var head = document.getElementsByTagName('head')[0],
    link = document.createElement('link');
  link.type = 'text/css';
  link.rel = 'stylesheet';
  link.href = url;
  head.appendChild(link);
  return link;
}

function replaceFileIconsCSS(name, code) {
  $(".activityinstance").each(function(index, value) {
    var instanceName = $(value).eq(0).text();
    if (instanceName.indexOf(name) !== -1) {
      $(this).find("img").css('display', 'none');
      var icon = $("<i class=\"icon-" + code + " iconlarge\"/>");
      $(this).find('.instancename').css('position', 'absolute');
      $(this).find('.instancename').css('top', '25px');
      $(this).prepend(icon);
    }
  });
}

function setBackgroundImage(location) {
  $(".row-fluid").css('background-image', 'url(' + location + ')');
}

function openAccordionByAnchor() {
  var url = window.location.href;
  if (url.indexOf('#') == -1) return;
  var section = url.substring(url.indexOf('#'));
  return section;
}


function replaceProgressBar() {
  var numElements = $(".progressBarCell").length;
  var completedElements = 0;
  $(".progressBarCell").each(function(index) {
    if ($(this).css("background-color") == "rgb(115, 168, 57)") {
      completedElements++;
    }
    $(this).css("background-color", "transparent");
  });
  var percentComplete = (completedElements / numElements) * 160 + '%';
  $(".progressBarProgressTable").css("background", "url('https://git.iddkingsonline.com/assets/images/progress_bg.png')");
  $(".progressBarProgressTable").css("background-size", "contain");
  $(".progressBarProgressTable").css("background-repeat", "no-repeat");
  $(".progressBarProgressTable").css("position", "relative");
  $(".progressBarProgressTable").css("height", 70);
  $(".progressBarHeader").css('display', "none");
  var bus = $("<img class='completition' src='https://git.iddkingsonline.com/assets/images/progress_bus.png'/>");
  $(".progressBarProgressTable").prepend(bus);
  $(".completition").css("left", 100);
  $(".completition").css("position", "absolute");
  $(".completition").css("width", 40);
  $(".completition").css("top", 30);
  $(".completition").css("margin-left", -70);
  $(".completition").css("text-align", "left");
}

function addProgressBar() {
  var numElements = $(".progressBarCell").length; // new Jquery
  var completedElements = 0;
  $(".progressBarCell").each(function(index) {
    if ($(this).css("background-color") == "rgb(115, 168, 57)") {
      completedElements++;
    }
    $(this).css("background-color", "transparent");
  });
  var percentComplete = (completedElements / numElements) * 90 + '%';
  var summaryProgress = $("<div class='summary-progress'></div>");
  $(".summary").first().append(summaryProgress);
  var progress = $("<div class='summary-progress-icon'/>");
  $(".summary-progress").append(progress);
  $(".summary-progress-icon").css("left", percentComplete);
}

function randomNumber() {
  return Math.floor(Math.random() * 32768);
}

function setImageByDate(weeks) {
  var currentWeek = this.getCurrentWeek(weeks);
  for (var i = 0; i < 5; i++) {
    var imageSrc = $('.img-row img:eq(' + i + ')').attr('src');
    if (i <= currentWeek) {
      imageSrc = imageSrc.replace('no', '');
    } else {
      $('.img-row a:eq(' + i + ')').css('pointer-events', 'none');
    }
    imageSrc += '?' + randomNumber();
    $('.img-row img:eq(' + i + ')').attr('src', imageSrc);
  }
}

function getCurrentWeek(weeks) {
  var date = new Date();
  var e = date.toUTCString();
  e = Date.parse(e);

  // data example - "Fri, 21 Jul 2017 23:00:00 GMT"

  for (var i = 0; i < weeks.length; i++) {
    weeks[i] = new Date(weeks[i]);
    if (weeks[i] <= e) {
      console.log("Unlock Week " + i + ". " + weeks[i]);
    } else {
      console.log("Week " + i + " is locked. " + weeks[i]);
      return i - 1;
    }
  }
  console.log("All weeks are accessible.");
  return weeks.length;
}

function closeOtherAccordions(context) {
  $('ul.topics li.section').each(function(index) {
    if (!($(this).find('.the_toggle').is(context))) {
      $(this).find('.sectionopen').addClass('sectionclosed').removeClass('sectionopen');
      $(this).find('.toggle_open').addClass('toggle_closed').removeClass('toggle_open');
    }
  });
}

function drawLogo(location) {
  var logo = $(".logo").children();
  logo.attr("src", location);
  logo.css("width", 50).css("height", 50);
}

function getSize() {
  size = $( "p" ).css( "font-size" );
  size = parseInt(size, 10);
  $( "#font-size" ).text(  size  );
}

//get inital font size
getSize();

$( "#up" ).on( "click", function() {

  // parse font size, if less than 50 increase font size
  if ((size + 2) <= 50) {
    $( "p" ).css( "font-size", "+=2" );
    $( "#font-size" ).text(  size += 2 );
  }
});

$( "#down" ).on( "click", function() {
  if ((size - 2) >= 12) {
    $( "p" ).css( "font-size", "-=2" );
    $( "#font-size" ).text(  size -= 2  );
  }
});
