//planetx's JS

(function($){


  $(document).ready(function(jQuery){

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


})(jQuery);    