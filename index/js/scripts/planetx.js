//planetx's JS

(function($) {


    $(document).ready(function() {

        stickHeader();

        function stickHeader(){
            var s = $("#header .header-holder");
            var pos = s.position();

            $(window).scroll(function() {
                var windowpos = $(window).scrollTop();
                if (windowpos >= pos.top) {
                    s.addClass("stick");
                } else {
                    s.removeClass("stick");
                }

                var main_content = $('#static-panels');
                var topDistance = main_content.offset().top;

                if ((topDistance - 100) < windowpos) {
                    $('#header #nav').addClass('trans-header');
                } else {
                    $('#header #nav').removeClass('trans-header');
                }
            });
        }
        
        

        // ============= header top banner =================
        // set cookie for banner for first visit
        var $promoBanner = $('#preheader-promo-banner');
        var activePromoBanner = $.cookie("activePromoBanner");

        if (activePromoBanner == null) {
            $promoBanner.trigger('click');
        }
        $.cookie('activePromoBanner', 'yes', { expires: 1, path: '/' });

        // Promo Banner Toggle
        $promoBanner.click(function(event) {

            var open_bnr = $(this).data('open');
            if (open_bnr) {
                $('#promo-banner').slideUp('slow', function() {
                    $promoBanner.find('.glyphicon').addClass('glyphicon-menu-down').removeClass('glyphicon-menu-up');
                    stickHeader();
                });
            } else {
                $('#promo-banner').slideDown('slow', function() {
                    $promoBanner.find('.glyphicon').addClass('glyphicon-menu-up').removeClass('glyphicon-menu-down');
                    stickHeader();
                });
            }
            $(this).data("open", !open_bnr);

        });
        $('#close-preheader').click(function(event) {
            $promoBanner.trigger('click')
        });

        // ================= Home
        $(".ilbvid-tgoma").iLightBox({
            skin: "springfree",
            controls: {
                fullscreen: !1
            }
        });

        $("#vid-testimonial").royalSlider({
            autoHeight: !0,
            arrowsNav: !1,
            controlNavigation: 'bullets',
            arrowsNavAutoHide: !1,
            navigateByClick: !1,
            autoPlay: {
                enabled: !0,
                delay: 5e3
            }
        });

        // ========= Trampoline Hotspot box
        $('#trmp-hotspots .hotspot-point').each(function(index, el) {
            var x_pos = $(this).data('x');
            var y_pos = $(this).data('y');
            $(this).css({
                top: x_pos + '%',
                left: y_pos + '%'
            });

            $(this).click(function(event) {
                event.preventDefault();
                $(this).siblings().removeClass('open-preview');
                $(this).addClass('open-preview');

                /*$(this).find('.hotspot-tooltip').click(function(ev) {
                   ev.stopPropagation();
                });*/
				$(this).find('.hotspot-tooltip').hover(
				  function() {
					
				  }, function() {
					$(this).parents('.hotspot-point').removeClass('open-preview');
				  }
				);
                //event.stopPropagation();
            });
            var hs_item = $(this).find('.hotspot-tooltip').html();
            $('#hotspots-item').append('<div class="hotspot-tooltip clearfix">' + hs_item + '</div>');
            //$('#hotspots-item').append(hs_item);
        });
        $(document).click(function(e) {
            var $all_hotspot = $('#trmp-hotspots .hotspot-point');
            //$all_hotspot.removeClass('open-preview');
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

   // window.setInterval(function(){
        diffSeconds = parseInt(diffSeconds) + parseInt(jump);
        var diffSeconds_a = diffSeconds.toString().split('');
        var jump_count = new Array();
        var jump_count_old = new Array();

        $('#jumpCount span').each(function(index, el) {
            jump_count_old.push($(this).text());
        });
        for (var i = 0; i <= diffSeconds_a.length - 1; i++) {
            if(diffSeconds_a[i] == jump_count_old[i]){
                jump_count.push('<span>'+ diffSeconds_a[i] +'</span>');
            }else{
                jump_count.push('<span class="flip">'+jump_count_old[i]+'</span>');     
            }
        }
        $('#jumpCount').html(jump_count);
        setTimeout(function(){
            $('#jumpCount span').each(function(index, el) {
                $(this).text(diffSeconds_a[index]);
            });
        },300);
        

        diffSeconds_2 = parseInt(diffSeconds_2) + parseInt(jump);
        var diffSeconds_a_2 = diffSeconds_2.toString().split('');
        var jump_count_2 = new Array();
        var jump_count_old_2 = new Array();

        $('#caloriCount span').each(function(index, el) {
            jump_count_old_2.push($(this).text());
        });
        for (var i = 0; i <= diffSeconds_a_2.length - 1; i++) {
            if(diffSeconds_a_2[i] == jump_count_old_2[i]){
                jump_count_2.push('<span>'+ diffSeconds_a_2[i] +'</span>');
            }else{
                jump_count_2.push('<span class="flip">'+ jump_count_old_2[i] +'</span>');     
            }         
        }
        $('#caloriCount').html(jump_count_2);
        setTimeout(function(){
            $('#caloriCount span').each(function(index, el) {
                $(this).text(diffSeconds_a_2[index]);
            });
        },300);
    //}, 1000); 
    
    // ====================================


        $("#trmp-hotspots .ilbvid-trampo-1").iLightBox({
            skin: "springfree",
            controls: {
                fullscreen: !1
            }
        });		
		
        $("#trmp-hotspots .ilbvid-trampo-2").iLightBox({
            skin: "springfree",
            controls: {
                fullscreen: !1
            }
        });
        $("#trmp-hotspots .ilbvid-trampo-3").iLightBox({
            skin: "springfree",
            controls: {
                fullscreen: !1
            }
        });
        $("#trmp-hotspots .ilbvid-trampo-4").iLightBox({
            skin: "springfree",
            controls: {
                fullscreen: !1
            }
        });
        $("#trmp-hotspots .ilbvid-trampo-5").iLightBox({
            skin: "springfree",
            controls: {
                fullscreen: !1
            }
        });
		
		
		$("#hotspots-item .ilbvid-trampo-1").iLightBox({
            skin: "springfree",
            controls: {
                fullscreen: !1
            }
        });
		
		$("#hotspots-item .ilbvid-trampo-2").iLightBox({
            skin: "springfree",
            controls: {
                fullscreen: !1
            }
        });
		
		$("#hotspots-item .ilbvid-trampo-3").iLightBox({
            skin: "springfree",
            controls: {
                fullscreen: !1
            }
        });
		
		$("#hotspots-item .ilbvid-trampo-4").iLightBox({
            skin: "springfree",
            controls: {
                fullscreen: !1
            }
        });
		
		$("#hotspots-item .ilbvid-trampo-5").iLightBox({
            skin: "springfree",
            controls: {
                fullscreen: !1
            }
        });

        // ========= Video Testimonials
        $(".ilbvid-vidTesti-1").iLightBox({
            skin: "springfree",
            controls: {
                fullscreen: !1
            }
        });
        $(".ilbvid-vidTesti-2").iLightBox({
            skin: "springfree",
            controls: {
                fullscreen: !1
            }
        });
        $(".ilbvid-vidTesti-3").iLightBox({
            skin: "springfree",
            controls: {
                fullscreen: !1
            }
        });

    });

    // Make the flip counter
    $("#flipcounter").flipCounterInit({'speed': 0.5});

    var startTime = new Date().getTime();
    var initialDate = new Date("9/10/2015").getTime();

    // Update values
    function updateLoop() {
        var elapsedTime = new Date().getTime() - initialDate;
        var diffSeconds = Math.ceil((elapsedTime / (1000 * 3600 * 24)) * 86400);
        $("#flipcounter").flipCounterUpdate(diffSeconds);
        window.setTimeout(function() {
            updateLoop();
        }, 43);
    }

    // do it!
    updateLoop();

})(jQuery);
