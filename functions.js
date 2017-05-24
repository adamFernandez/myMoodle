function replaceFileIcons(name, location) {
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
      $(this).find("img").first().css('display', 'none')
      var icon = $("<i class=\"icon-" + replace + " iconlarge\"/>");;
      $(this).find('.instancename').css('position', 'absolute');
      $(this).find('.instancename').css('top', '25px');
      $(this).prepend(icon);
    }
  });
}

function replaceFileIconsCSS(name, code) {
  $(".activityinstance").each(function(index, value) {
    var instanceName = $(value).eq(0).text();
    if (instanceName.indexOf(name) !== -1) {
      $(this).find("img").css('display', 'none')
      var icon = $("<i class=\"icon-" + code + " iconlarge\"/>");;
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
  var numElements = $(".progressBarCell").size();
  var completedElements = 0;
  $(".progressBarCell").each(function(index) {
    if ($(this).css("background-color") == "rgb(115, 168, 57)") {
      completedElements++;
    }
    $(this).css("background-color", "transparent");
    // $(this).css("background","url('https://keats.kcl.ac.uk/pluginfile.php/2038040/mod_resource/content/3/hank.png')");
  });
  var percentComplete = (completedElements / numElements) * 160 + '%';
  $(".progressBarProgressTable").css("background", "url('https://git.iddkingsonline.com/assets/images/progress_bg.png')");
  $(".progressBarProgressTable").css("background-size", "contain");
  $(".progressBarProgressTable").css("background-repeat", "no-repeat");
  $(".progressBarProgressTable").css("position", "relative");
  $(".progressBarProgressTable").css("height", 70);
  $(".progressBarHeader").css('display', "none")
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
  var numElements = $(".progressBarCell").size();
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
  var progress = $("<img class='summary-progress-icon'/>");
  $(".summary-progress").append(progress);
  $(".summary-progress-icon").css("left", percentComplete);
}

function randomNumber() {
  return Math.floor(Math.random() * 32768);
}

function setImageByDate() {
  var currentWeek = this.getCurrentWeek();
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

function getCurrentWeek() {
  var date = new Date();
  var now_utc = new Date(date.getUTCFullYear(), date.getUTCMonth(), date.getUTCDate(), date.getUTCHours(), date.getUTCMinutes(), date.getUTCSeconds());
  var week14 = new Date();

  var week14 = new Date("5, 26, 2017 23:00:00");
  var week13 = new Date("6, 2, 2017 23:00:00");
  var week12 = new Date("6, 9, 2017 23:00:00");
  var week11 = new Date("5, 16, 2017 23:00:00");

  var test = new Date("5, 23, 2017 23:00:00");

  console.log("now_utc", now_utc);
  console.log(week14);
  console.log(test);

  console.log(now_utc <= week14);
  console.log(now_utc <= test);


  // var day = date.getUTCDate();
  // var month = date.getUTCMonth() + 1;
  // var hour = date.getUTCHours();
  // console.log(hour);
  // console.log('today is the ' + day + ' of ' + month);

  switch (true) { // month is 0 starting array (Jan = 0)

    case (now_utc >= week11):
      console.log('week 11');
      return 4;
    case (now_utc >= week12):
      console.log('week 12');
      return 3;
    case (now_utc >= week13):
      console.log('week 13');
      return 2;
    case (now_utc >= week14):
      console.log('week 14');
      return 1;
    case (true):
      console.log('week 15');
      return 0;
      break;
  }
}

function closeOtherAccordions(context) {
  $('ul.topics li.section').each(function(index) {
    if (!($(this).find('.the_toggle').is(context))) {
      $(this).find('.sectionopen').addClass('sectionclosed').removeClass('sectionopen');
      $(this).find('.toggle_open').addClass('toggle_closed').removeClass('toggle_open');
    }
  });
}

function browserType() {
  console.log(head.browser.chrome);
}

function drawLogo(location) {
  var logo = $(".logo").children();
  logo.attr("src", location);
  logo.css("width", 50).css("height", 50);
}
