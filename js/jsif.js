/**
 * JSIF custom Javascript
 */
// A $( document ).ready() block.
$( document ).ready(function() {
	
	// For v2 [data-toggle="dropdown"] is required for [data-submenu].
	// For v2 .dropdown-submenu > [data-toggle="dropdown"] is forbidden.
	$('[data-submenu]').submenupicker();
	
	if( $("#tour-detail-gallery").length > 0 ) {
		$("#tour-detail-gallery").carouFredSel({
			circular    : true,
			infinite    : false,
			responsive	: true,
			width		: '100%',		// automatically calculated
			height		: '45%',		// automatically calculated
			prev : "#foo1_prev",
			next : "#foo1_next",
			swipe : { onTouch : true, onMouse : true },
			scroll		: {
				fx			: "fade"
			},
			auto		: {
				play			: false,
				timeoutDuration	: null		//	5 * auto.duration
			},
			items		: {
				visible		: 1,
				width		: null,
				height		: '45%'
			}
		});
	}

	if( $("#experience-gallery").length > 0 ) {
		$("#experience-gallery").carouFredSel({
			circular    : true,
			infinite    : false,
			responsive	: true,
			width		: '100%',		// automatically calculated
			height		: '70%',		// automatically calculated
			prev : "#foo2_prev",
			next : "#foo2_next",
			swipe : { onTouch : true, onMouse : true },
			scroll		: {
				fx			: "fade"
			},
			auto		: {
				play			: false,
				timeoutDuration	: null		//	5 * auto.duration
			},
			items		: {
				visible		: 1,
				width		: null,
				height		: '70%'
			}
		});
	}
	
	$(".tours-grid-inner .thumb").each(function() {	
		if($(this).find('.title .desc').text() != '') {
			$(this).mouseenter(function(){
				$(this).find('.title').stop().animate({
				    bottom: 0
				  }, 500, function() {
				    // Animation complete.
				  });
			});
			$(this).mouseleave(function(){
				$(this).find('.title').stop().animate({
				    bottom: -100
				  }, 500, function() {
				    // Animation complete.
				  });
			});
		} else {
			$(this).find('.title').css('bottom','0');
		}
	});
	
	// We bind a new event to our link
	$('.share-this li.share-twitter a').click(function(e){

	  //We tell our browser not to follow that link
	  e.preventDefault();

	  //We get the URL of the link
	  var loc = $(this).attr('href');

	  //We get the title of the link
	  var title  = encodeURIComponent($(this).attr('title'));

	  //We trigger a new window with the Twitter dialog, in the middle of the page
	  window.open('http://twitter.com/share?url=' + loc + '&text=' + title + '&', 'twitterwindow', 'height=450, width=550, top='+($(window).height()/2 - 225) +', left='+$(window).width()/2 +', toolbar=0, location=0, menubar=0, directories=0, scrollbars=0');

	});
	
	$(".share-this li.share-fb a").on("click",function(){
	    var fbpopup = window.open("https://www.facebook.com/sharer/sharer.php?u=http://www.visitjamaica.com", "pop", "width=600, height=400, scrollbars=no");
	    return false;
	});
	
	$(".share-this li.share-googleplus a").on("click",function(){
	    var fbpopup = window.open("https://plusone.google.com/_/+1/confirm?hl=en&url=http://www.visitjamaica.com&title=Visit Jamaica", "pop", "width=600, height=400, scrollbars=no");
	    return false;
	});
});