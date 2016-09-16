// JavaScript Document

$("#inline_html_simple").iLightBox({
        skin: "springfree",
        controls: {
            fullscreen: !1
        }
    });

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

// =========== Counter 
    var initialDate = new Date("9/10/2015");
    var jump = 2;

    var today = new Date();
    var dd = today.getDate();
    var mm = today.getMonth() + 1; //January is 0!
    var yyyy = today.getFullYear();
    if(dd < 10) {
        dd='0'+dd
    } 
    if(mm < 10) {
        mm='0'+mm
    }
    today = mm+'/'+dd+'/'+yyyy;

    
    var todayDate = new Date(today);
    var timeDiff = Math.abs(todayDate.getTime() - initialDate.getTime());
    var diffSeconds = Math.ceil((timeDiff / (1000 * 3600 * 24)) * 86400);

    // -----
    var initialDate_2 = new Date("9/01/2016");
    var jump_2 = 1;

    var today_2 = new Date();
    var dd_2 = today_2.getDate();
    var mm_2 = today_2.getMonth() + 1; //January is 0!
    var yyyy_2 = today_2.getFullYear();
    if(dd_2 < 10) {
        dd_2='0'+dd_2
    } 
    if(mm_2 < 10) {
        mm_2='0'+mm_2
    }
    today_2 = mm_2+'/'+dd_2+'/'+yyyy_2;

    
    var todayDate_2 = new Date(today_2);
    var timeDiff_2 = Math.abs(todayDate_2.getTime() - initialDate_2.getTime());
    var diffSeconds_2 = Math.ceil((timeDiff_2 / (1000 * 3600 * 24)) * 86400);
    // ----

    window.setInterval(function(){
        diffSeconds = parseInt(diffSeconds) + parseInt(jump);
        var diffSeconds_a = diffSeconds.toString().split('');
        var jump_count = new Array();
        for (var i = 0; i <= diffSeconds_a.length - 1; i++) {
            jump_count.push('<span>'+ diffSeconds_a[i] +'</span>');              
        }
        $('#jumpCount').html(jump_count);

        diffSeconds_2 = parseInt(diffSeconds_2) + parseInt(jump);
        var diffSeconds_a_2 = diffSeconds_2.toString().split('');
        var jump_count_2 = new Array();
        for (var i = 0; i <= diffSeconds_a_2.length - 1; i++) {
            jump_count_2.push('<span>'+ diffSeconds_a_2[i] +'</span>');              
        }
        $('#caloriCount').html(jump_count_2);
    }, 1000); 
    
    // ====================================