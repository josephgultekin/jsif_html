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
			height		: '50%',		// automatically calculated
			prev : "#foo1_prev",
			next : "#foo1_next",
			scroll		: {
				fx			: "crossfade"
			},
			auto		: {
				play			: false,
				timeoutDuration	: null		//	5 * auto.duration
			},
			items		: {
				visible		: 1,
				width		: null,
				height		: '50%'
			}
		});
	}
	
	$(".tours-grid-inner .thumb").each(function() {		
		if($(this).find('.title .desc').text() != '') {
			$(this).mouseenter(function(){
				$(this).find('.title').animate({
				    bottom: 0
				  }, 500, function() {
				    // Animation complete.
				  });
			});
			$(this).mouseleave(function(){
				$(this).find('.title').animate({
				    bottom: -50
				  }, 500, function() {
				    // Animation complete.
				  });
			});
		} else {
			$(this).find('.title').css('bottom','0');
		}
	});
});