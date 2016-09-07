//planetx's JS

(function($){


  $(document).ready(function(){
  
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
      $('#promo-banner').toggle( "slow", function() {
      $promoBanner.find('.glyphicon').toggleClass("glyphicon-menu-down glyphicon-menu-up");
      });
    });
    $('#close-preheader').click(function(event) {
      $('#promo-banner').slideUp('slow');
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