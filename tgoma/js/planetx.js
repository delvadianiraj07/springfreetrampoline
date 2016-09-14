// JavaScript Document



jQuery("#testi-carousel").owlCarousel({
	items:1,
	autoPlay:true,
	itemsDesktop : [1200,1],
	itemsDesktopSmall : [992,1],
	itemsTablet: [768,1],
	itemsMobile : [767,1],
	navigation: true,
	mouseDrag: true,
	pagination: true		
});

jQuery("#award-Slider").owlCarousel({
		items:2,
		itemsDesktop : [1200,2],
		itemsDesktopSmall : [992,2],
		itemsTablet: [768,2],
		itemsMobile : [767,1],
		margin:0,
		stagePadding:0,
		navigation: true,
		mouseDrag: true,
		navigationText : ["&#xf060;","&#xf061;"],
		pagination: false		
	});
	
	
	
$(".game").colorbox({inline:true, width:"100%"});
$(document).bind('cbox_complete', function(){
  setTimeout( function(){	
  var c_height = $('#cboxLoadedContent .tab_popup').outerHeight();
  $('#cboxContent').css('height',c_height);
  $('#cboxLoadedContent, #cboxWrapper, #colorbox').css('height',c_height);
  },500);
});