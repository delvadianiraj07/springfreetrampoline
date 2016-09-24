//planetx's JS

(function($) {


    $(document).ready(function() {

        stickHeader();

        function stickHeader() {
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

                    },
                    function() {
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

    // ---------- Make the flip counter for Jump
    $("#flipcounterJump").flipCounterInit({ 'speed': 0.5 });

    var startTime = new Date().getTime();
    var initialDate_jump = new Date("9/10/2015").getTime();

    // Update values
    function updateLoop() {
        var elapsedTime_jump = new Date().getTime() - initialDate_jump;
        var diffSeconds_jump = Math.ceil((elapsedTime_jump / (1000 * 3600 * 24)) * 86400);
        $("#flipcounterJump").flipCounterUpdate(diffSeconds_jump);
        window.setTimeout(function() {
            updateLoop();
        }, 43);
    }

    // do it!
    updateLoop();

    // ----------- Make the flip counter Calories
    $("#flipcounterCalori").flipCounterInit({ 'speed': 0.5 });

    var initialDate_cal = new Date("9/5/2016").getTime();

    // Update values
    function updateLoop2() {
        var elapsedTime_cal = new Date().getTime() - initialDate_cal;
        var diffSeconds_cal = Math.ceil((elapsedTime_cal / (1000 * 3600 * 24)) * 86400);
        $("#flipcounterCalori").flipCounterUpdate(diffSeconds_cal);
        window.setTimeout(function() {
            updateLoop2();
        }, 1000);
    }

    // do it!
    updateLoop2();

})(jQuery);
