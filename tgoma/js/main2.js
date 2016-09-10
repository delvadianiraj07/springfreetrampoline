jQuery(document).ready(function(){
	//Adding subnav classes
	jQuery("#close_moreText").on('click',function(){
		jQuery('#moreText').collapse('hide');
		return false;
	});
	jQuery("#close_moreFaq").on('click',function(){
		jQuery('#moreFaq').collapse('hide');
		return false;
	});
	
	//matchHeight for equal height columns
	if(jQuery(".mHeight").length > 0) {
		jQuery(".mHeight").matchHeight();
	};


	jQuery("#bnnr-video").owlCarousel({
		items:1,
		//merge:true,
		//loop:true,
		margin:0,
		video:true,
		lazyLoad:true,
		center:true,
		pagination: false
	});
	jQuery("#award-Slider").owlCarousel({
		items:3,
		itemsDesktop : [1200,3],
		itemsDesktopSmall : [992,3],
		itemsTablet: [768,3],
		itemsMobile : [767,1],
		margin:0,
		stagePadding:0,
		navigation: true,
		mouseDrag: true,
		navigationText : ["&#xf060;","&#xf061;"],
		pagination: false		
	});

// Waypoints.js & animate.css animations //
// block1
jQuery("#anim1").waypoint(function() {
	jQuery("#anim1").addClass('fadeInDown opaque');
}, { offset: 'bottom-in-view'});
jQuery("#anim2").waypoint(function() {
	jQuery("#anim2").addClass('fadeInUp opaque');
}, { offset: '90%'});	
jQuery("#block1 .textBox").waypoint(function() {
	jQuery("#block1 .textBox").addClass('fadeIn opaque');
}, { offset: 'bottom-in-view'});

// block2
jQuery("#block2 .secTitle").waypoint(function() {
	jQuery("#block2 .secTitle").addClass('fadeInDown opaque');
}, { offset: 'bottom-in-view'});
jQuery("#block2 .entry").waypoint(function() {
	jQuery("#block2 .entry").addClass('fadeInUp opaque');
}, { offset: '80%'});
jQuery("#appStore1").waypoint(function() {
	jQuery("#appStore1").addClass('flipInY opaque');
}, { offset: 'bottom-in-view'});

// block3
jQuery("#block3 .secTitle").waypoint(function() {
	jQuery("#block3 .secTitle").addClass('fadeInDown opaque');
}, { offset: 'bottom-in-view'});
jQuery("#block3 .entry").waypoint(function() {
	jQuery("#block3 .entry").addClass('fadeInUp opaque');
}, { offset: '80%'});

// block4
jQuery("#block4 .secTitle").waypoint(function() {
	jQuery("#block4 .secTitle").addClass('fadeInDown opaque');
}, { offset: 'bottom-in-view'});
jQuery("#block4 .entry").waypoint(function() {
	jQuery("#block4 .entry").addClass('fadeInUp opaque');
}, { offset: '80%'});

// block5
jQuery("#appStore2").waypoint(function() {
	jQuery("#appStore2").addClass('fadeInDown opaque');
}, { offset: 'bottom-in-view'});

// block6
jQuery("#block6 .secTitle").waypoint(function() {
	jQuery("#block6 .secTitle").addClass('fadeInDown opaque');
}, { offset: '80%'});
//jQuery("#block6 .award-box").waypoint(function() {
	//jQuery("#block6 .award-box").addClass('fadeInUp opaque');
//}, { offset: '90%'});

// block7
jQuery("#block7 .secTitle").waypoint(function() {
	jQuery("#block7 .secTitle").addClass('fadeInDown opaque');
}, { offset: '80%'});

// block8
jQuery("#block8 .secTitle").waypoint(function() {
	jQuery("#block8 .secTitle").addClass('fadeInDown opaque');
}, { offset: '80%'});
jQuery("#block8 .entry").waypoint(function() {
	jQuery("#block8 .entry").addClass('fadeInUp opaque');
}, { offset: '80%'});
/* footer */
jQuery(".news-letter h3").waypoint(function() {
	jQuery(".news-letter h3").toggleClass('fadeInUp opaque');
}, { offset: '80%'});

jQuery("#newsForm").waypoint(function() {
	jQuery("#newsForm").toggleClass('fadeInDown opaque');
}, { offset: '80%'});

jQuery(".social").waypoint(function() {
	jQuery(".social").addClass('bounceIn opaque');
}, { offset: 'bottom-in-view'});

jQuery("#foonNav").waypoint(function() {
	jQuery("#foonNav").addClass('fadeInUp opaque');
}, { offset: 'bottom-in-view'});

jQuery("#copyright").waypoint(function() {
	jQuery("#copyright").addClass('fadeInUp opaque');
}, { offset: 'bottom-in-view'});
jQuery("#par2").waypoint(function() {
	jQuery("#par2").toggleClass('bounceIn opaque');
}, { offset: 'bottom-in-view'});
jQuery("#feelText").waypoint(function() {
	jQuery("#feelText").toggleClass('fadeInDown opaque');
}, { offset: 'bottom-in-view'});
// parallax scrolling
require.config({
	baseUrl: "js",
	paths: {
		'skrollr' : "skrollr.min"
	},
	waitSeconds: 15
});
if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
}
else { 
	require(['skrollr'], function(skrollr){
		var s = skrollr.init({
			edgeStrategy: 'set',
			easing: {
				WTF: Math.random,
				inverted: function(p) {
					return 1-p;
				}
			}
		});
	});

}
//var wH = jQuery(window).height();
//console.log (wH);
var feel_top = jQuery('#feelthefun').offset().top;
console.log (feel_top);
//var cal_height = feel_top -wH;
//console.log (cal_height);
//var alienSt = feel_top - parseInt(165);
//var alienEnd = feel_top + parseInt(1054);
//var girlMid = feel_top + parseInt(685);
//var girlEnd = feel_top + parseInt(935);

/*jQuery(window).load(function(){
	jQuery('#feelthefun-wrap').append('<div class="clearfix scrollr-wrap" id="feelthefun" data-7000="bottom:100%;"><div id="feelText" class="transparent animated" data-5750="left:10%;top:12%;" data-6550="top:40%;"><img src="images/par-feel-the-sun.png" height="340" width="271"></div><div class="" data-'+alienSt+'="left:38%;top:0%; z-index:10;" data-'+girlMid+'="top:27%;" data-'+girlEnd+'="top:38%;"><img src="images/par-girl.png" height="736" width="258"></div><div id="footPrint" class="" data-6350="left: 41%; top: 63.3%; z-index:9" data-6600="left:41.5%;top:75%;"><img src="images/par-footprint.png" height="84" width="132"></div><div id="alien1" data-'+alienSt+'="left:28%;top:-3%;display:block;" data-'+alienEnd+'="left:26.5%;top:76.5%;display:none;"><img src="images/alien1.png" height="289" width="101"></div><div id="alien2" data-'+alienSt+'="right:25%;top:-3%;display:block;" data-'+alienEnd+'="right:46.5%;top:77%;display:none;"><img src="images/alien2.png" height="289" width="101"></div><div id="alien3" data-'+alienSt+'="left:8%;top:-3%;display:block;" data-'+alienEnd+'="left:59.5%;top:76.2%;display:none;"><img src="images/alien3.png" height="289" width="101"></div><div id="alien4" data-'+alienSt+'="right:10%;top:-3%;display:block;" data-'+alienEnd+'="right:46%;top:82%;display:none;"><img src="images/alien4.png" height="289" width="101"></div><div id="par2" class="transparent animated"><img src="images/Aliens.png" height="249" width="494"></div></div>');
	var pink = jQuery('#feelthefun-wrap').height();
	console.log (pink);
});*/











/////////////////////////////////////////////
});