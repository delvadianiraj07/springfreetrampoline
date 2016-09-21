jQuery(document).ready(function(){

	var head_hei = jQuery(".header").height();
	console.log (head_hei);	

	var moretext_hei = jQuery("#moreText").height() + head_hei;
	console.log (moretext_hei);

	var morefaq_hei = jQuery("#moreFaq").height() + head_hei;
	console.log (morefaq_hei);


	jQuery("#moreText-btn").click(function(){
		jQuery("#moreText").slideDown(function(){
			Waypoint.refreshAll();
			s.refresh(jQuery("#feelthefun div"));
		});
		jQuery('html,body').animate({
			scrollTop: jQuery('#moreText').offset().top - head_hei
		},500);
		jQuery('#fea_alien2').hide();
		return false;
	});
	jQuery("#close_moreText").click(function(){
		jQuery('#moreText').slideUp(function(){
			Waypoint.refreshAll();
			s.refresh(jQuery("#feelthefun div"));
		});
		jQuery('html,body').animate({scrollTop: jQuery('#block2').offset().top - moretext_hei},500);
		jQuery('#fea_alien2').show();
		return false;
	});
	

	jQuery("#moreText-btn2").click(function(){
		jQuery("#moreText").slideDown();
		jQuery('html,body').animate({
			scrollTop: jQuery('#moreText').offset().top - head_hei
		},500);
		return false;
	});
	jQuery("#close_moreText2").click(function(){
		jQuery('#moreText').slideUp();
		return false;
	});

	jQuery("#moreFaq-btn").click(function(){
		jQuery("#moreFaq").slideToggle();
		jQuery('html,body').animate({scrollTop: jQuery('#moreFaq').offset().top - head_hei},500);
		jQuery(this).toggleClass("open");
		return false;
	});
	jQuery(".faq-ques").click(function(){
		jQuery(this).children(".fa").toggleClass("fa-caret-down");
		jQuery(this).next('.faq-ans').slideToggle();
		//jQuery('html,body').animate({scrollTop: jQuery('.news-letter').offset().top - morefaq_hei},500);
		return false;
	});
	
	//matchHeight for equal height columns
	if(jQuery(".mHeight").length > 0) {
		jQuery(".mHeight").matchHeight();
	};


	// tab slider
	jQuery("#tabSlider1, #tabSlider2, #tabSlider3, #tabSlider4, #tabSlider5, #tabSlider6, #tabSlider7").owlCarousel({
		items:1,
		itemsDesktop : [1200,1],
		itemsDesktopSmall : [992,1],
		itemsTablet: [768,1],
		itemsMobile : [767,1],
		navigation: true,
		mouseDrag: true,
		navigationText : ["<img src='images/icon-prev.png'>","<img src='images/icon-next.png'>"],
		pagination: false		
	});
	jQuery("#testi-carousel").owlCarousel({
		items:1,
		itemsDesktop : [1200,1],
		itemsDesktopSmall : [992,1],
		itemsTablet: [768,1],
		itemsMobile : [767,1],
		navigation: true,
		mouseDrag: true,
		navigationText : ["<img src='images/icon-prev.png'>","<img src='images/icon-next.png'>"],
		pagination: false		
	});
	
	
	// award slider
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

	//Banner video slider
	slider = jQuery('#bnnr-video').bxSlider({
		auto: true,
		adaptiveHeight: true,
		mode: 'fade',
		captions: true,
		pager: false,
		controls: true,
		nextText: '<i class="fa fa-angle-right"></i>',
		prevText: '<i class="fa fa-angle-left"></i>',
		video: true,
		infiniteLoop: false
	});
	//jQuery('#bnnr-video').bxSlider();
	jQuery('#bnnr-video .youtube-player').on('click',function(){
		slider.stopAuto();
		console.log (stop);
	})

// Waypoints.js & animate.css animations //
// block1
/**/
jQuery("#anim1").waypoint(function() {
	jQuery("#anim1").addClass('fadeInDown opaque');
}, { offset: 'bottom-in-view'});
jQuery("#anim2").waypoint(function() {
	jQuery("#anim2").addClass('fadeInUp opaque');
}, { offset: '90%'});	
jQuery("#block1 .textBox").waypoint(function() {
	jQuery("#block1 .textBox").addClass('fadeIn opaque');
}, { offset: 'bottom-in-view'});
jQuery("#fea_alien2").waypoint(function() {
	jQuery("#fea_alien2").addClass('zoomIn opaque');
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
	jQuery("#appStore2").addClass('flipInY opaque');
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

// footer
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
// tab video
jQuery('#fruitants_video').iLightBox({
	skin:'springfree',
	controls: {
		fullscreen: false
	}
});
jQuery('#stomp_video').iLightBox({
	skin:'springfree',
	controls: {
		fullscreen: false
	}
});
jQuery('#whatzat_video').iLightBox({
	skin:'springfree',
	controls: {
		fullscreen: false
	}
});
jQuery('#math_video').iLightBox({
	skin:'springfree',
	controls: {
		fullscreen: false
	}
});
jQuery('#stickers_video').iLightBox({
	skin:'springfree',
	controls: {
		fullscreen: false
	}
});
	// parallax scrolling
	if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
	}
	else { 
		s = skrollr.init({
			edgeStrategy: 'set',
		//smoothScrolling: 'true',
		easing: {
			WTF: Math.random,
			inverted: function(p) {
				return 1-p;
			}
		}
	});
	}
/////////////////////////////////////////////
});