// loads in icons to use in HTML
	loadCSS("https://git.iddkingsonline.com/instances/ELC/grid.css");
	loadCSS("https://fonts.googleapis.com/css?family=Open+Sans");
	function loadCSS(url){
		var head = document.getElementsByTagName('head')[0],
   		link = document.createElement('link');
		link.type = 'text/css';
   		link.rel = 'stylesheet';
   		link.href = url;
   		head.appendChild(link);
   		return link;
	}
