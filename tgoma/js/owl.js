// ************************ //
// Phone Owl Carousel Configuration - Phone Slider
// ************************ //
jQuery(document).ready(function($) {
    var itemamount = 2; // Adjust this number to get the correct speed from last slide to first transition
    var rewindSpeed = itemamount * 300;
    jQuery("#phone_prev").owlCarousel({
      addClassActive : true,
      itemsDesktop : [1200,3],
      itemsDesktopSmall : [992,3],
      itemsTablet: [768,3],
      itemsMobile : [767,1],
      responsiveBaseWidth: ".center_phone",
      items: itemamount,
      slideSpeed : 600,
      navigation: true,
      mouseDrag: true,
      pagination: false,
      navigationText : ["&#xf060;","&#xf061;"],
      rewindSpeed: rewindSpeed,
      autoWidth:true,
      afterAction: function(el){
        "use strict"; 
       //remove class active
       this
       .$owlItems
       .removeClass('active')
       //add class active
       this
       .$owlItems //owl internal $ object containing items
       .eq(this.currentItem + 1)
       .addClass('active')
      //fade in text
      jQuery('.left_points').stop().delay(300).fadeIn();
      //hide 2 away
      var active = jQuery('.active');
      active.siblings().removeClass('o_2away');
      active.next().next().addClass('o_2away');
      active.prev().prev().addClass('o_2away');
      jQuery('.bullet').removeClass('show');
      jQuery('.active .bullet').addClass('show');
    },
    afterInit: function(){
      "use strict"; 
      jQuery('#phone_prev').trigger("owl.goTo",0); // Current Slide - 1
      //jQuery('.end_slider').parent().css('width','303px');
    }
  });

// ************************ //
// Fade Out on Window Resize
// ************************ //
var is_touch_device = 'ontouchstart' in document.documentElement;
var viewport = $(window).width()
if (is_touch_device != true && viewport > 768) {
 function resizedw(){
  "use strict"; 
  jQuery('#phone_prev').fadeIn();
}
var doit;
window.onresize = function(){
  "use strict"; 
  jQuery('#phone_prev').hide();
  clearTimeout(doit);
  doit = setTimeout(resizedw, 200);
};
}
});

jQuery(document).ready(function($) {
 "use strict"; 

// ************************ //
// Bullets in Phone View
// ************************ //
jQuery('.bullet').click(function(){
  "use strict"; 
  var viewport = jQuery(window).width();
  if (viewport < 767) {
    jQuery(this).find('div.bulletText').clone().appendTo('.phoneOverlay div.text');
    jQuery('.phoneOverlay').fadeIn();
  }
});
jQuery('.phoneOverlay').click(function(){
  "use strict"; 
  jQuery(this).fadeOut().find('div').empty();
});
/*
// ************************ //
// Move nav in and Push Page
// ************************ //
$('.phone-menu').click(function(){
  "use strict"; 
  $('body').animate({
    'right' : '240px'
  }, 310, "easeInOutCirc", function(){
    "use strict"; 
    $(this).addClass('open');
  });
});

$('body').click(function(){
  "use strict"; 
  if ( $(this).hasClass('open') ) {
    $(this).animate({
      'right' : 0
    }, 310, "easeInOutCirc", function(){
      "use strict"; 
      $(this).removeClass('open');
    });
  }
});

// ************************ //
// Initiate Fast Click for Optimal Mobile Browsing
// ************************ //
$(function() {
  "use strict"; 
  FastClick.attach(document.body);
});

// ************************ //
// Scrolling
// ************************ //

$('nav.main_navigation li a').click(function(e){
  "use strict"; 
  if ( $(this).hasClass('blogmenu') ) {
    e.preventDefault();
    var $this = $($(this).attr('href'));
    $('html,body').animate({
      'scrollTop': $this.offset().top+'px'
    }, "easeInOutCirc");
  }
});

$('.text-logo a').click(function(e){
  "use strict"; 
  if ( $(this).hasClass('blogmenu') ) {
    e.preventDefault();
    var $this = $($(this).attr('href'));
    $('html,body').animate({
     'scrollTop': $this.offset().top+'px'
   }, "easeInOutCirc");
  }
});*/

});