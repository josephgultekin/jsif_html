/**
 * JSIF custom Javascript
 */

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