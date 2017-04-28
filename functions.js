function replaceFileIcons(name, location) {
	$(".activityinstance").each(function(index, value){
		var instanceName = $(value).eq(0).text();
		if(instanceName.indexOf(name) !== -1){
			var iconImage = $(this).find("img");
			$(iconImage.first().attr("src",location));
		}
	});
}

function replaceFileIconsByUrl(original, replace) {
	$(".activityinstance").each(function(index, value) {
		var iconImage = $(this).find("img").first();
		if($(iconImage).attr('src').indexOf(original) !== -1){
			$(this).find("img").first().css('display','none')
			var icon = $("<i class=\"icon-" + replace + " iconlarge\"/>");;
			$(this).find('.instancename').css('position','absolute');
			$(this).find('.instancename').css('top','25px');
			$(this).prepend(icon);
		}
	});
}

function replaceFileIconsCSS(name, code) {
	$(".activityinstance").each(function(index, value) {
		var instanceName = $(value).eq(0).text();
		if(instanceName.indexOf(name) !== -1){
			$(this).find("img").css('display','none')
			var icon = $("<i class=\"icon-" + code + " iconlarge\"/>");;
			$(this).find('.instancename').css('position','absolute');
			$(this).find('.instancename').css('top','25px');
			$(this).prepend(icon);
		}
	});
}

function setBackgroundImage(location) {
	$(".row-fluid").css('background-image','url('+ location + ')');
}

function openAccordionByAnchor() {
	var url = window.location.href;
	if(url.indexOf('#') == -1) return;
	var section = url.substring(url.indexOf('#'));
	return section;
}


function replaceProgressBar() {
	var numElements = $(".progressBarCell").size();
	var completedElements = 0;
		$(".progressBarCell").each(function(index) {
			if($(this).css("background-color") == "rgb(115, 168, 57)") {
				completedElements++;
			}
			$(this).css("background-color","transparent");
			// $(this).css("background","url('https://keats.kcl.ac.uk/pluginfile.php/2038040/mod_resource/content/3/hank.png')");
		});
		var percentComplete = (completedElements/numElements)*160 + '%';
		$(".progressBarProgressTable").css("background","url('https://git.iddkingsonline.com/assets/images/progress_bg.png')");
		$(".progressBarProgressTable").css("background-size", "contain");
		$(".progressBarProgressTable").css("background-repeat", "no-repeat");
		$(".progressBarProgressTable").css("position", "relative");
		$(".progressBarProgressTable").css("height", 70);
		$(".progressBarHeader").css('display',"none")
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
			if($(this).css("background-color") == "rgb(115, 168, 57)") {
				completedElements++;
			}
			$(this).css("background-color","transparent");
		});
		var percentComplete = (completedElements/numElements)*90 + '%';
		var summaryProgress = $("<div class='summary-progress'></div>");
		$(".summary").first().append(summaryProgress);
		var progress = $("<img class='summary-progress-icon'/>");
		$(".summary-progress").append(progress);
		$(".summary-progress-icon").css("left",percentComplete);
}

function setImageByDate() {
	var date = new Date();
	console.log(	date.getDate());
}

function closeOtherAccordions(context) {
	$('ul.topics li.section').each(function(index) {
		if(!($(this).find('.the_toggle').is(context))) {
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
