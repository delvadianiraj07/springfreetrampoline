//planetx's JS

(function($){


  $(document).ready(function(){

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

        if ( (topDistance) < windowpos ) {
          $('#header #nav').addClass('trans-header');
        }
        else{
          $('#header #nav').removeClass('trans-header');
        }
     
    });
  
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
         });
      } else {
         $('#promo-banner').slideDown('slow', function() {
           $promoBanner.find('.glyphicon').addClass('glyphicon-menu-up').removeClass('glyphicon-menu-down');
         });
      }
      $(this).data("open", !open_bnr);

      /*$('#promo-banner').toggle( "slow", function() {
        $promoBanner.find('.glyphicon').toggleClass("glyphicon-menu-down glyphicon-menu-up");
      });*/

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
        $(this).css('overflow', 'visible');
        $(this).siblings().css('overflow', 'hidden');
        $(this).find('.hotspot-tooltip').css('opacity', '1').css('z-index', '999');
        $(this).siblings().find('.hotspot-tooltip').css('opacity', '0').css('z-index', '9');
        var hs_item = $(this).find('.hs-tooltip-w').html();
        $('#hotspots-item').html(hs_item);
      });
    });

    $(".ilbvid-trampo-1").iLightBox({
        skin: "springfree",
        controls: {
            fullscreen: !1
        }
    });
    $(".ilbvid-trampo-2").iLightBox({
        skin: "springfree",
        controls: {
            fullscreen: !1
        }
    });
    $(".ilbvid-trampo-3").iLightBox({
        skin: "springfree",
        controls: {
            fullscreen: !1
        }
    });
    $(".ilbvid-trampo-4").iLightBox({
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

})(jQuery);