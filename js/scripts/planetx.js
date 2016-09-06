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