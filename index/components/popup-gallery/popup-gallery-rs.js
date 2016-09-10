    
(function($){

$(document).ready(function(){
	




      var royalGallery_wrapper = $('.royal-gallery-wrapper'),
          viewport_height = get_viewport_height();
      


      //royalGallery_wrapper.height(0.83 * viewport_height);

      $(window).resize(function(){
        viewport_height = get_viewport_height();
        //royalGallery_wrapper.height(0.83 * viewport_height);        
      })

      function get_viewport_height() {
        return ($(window).height());
      };


    //gallery
    //=======================================================

      $('#example-gallery').royalSlider({
        fullscreen: {
          enabled: true,
          nativeFS: true
        },
        controlNavigation: 'thumbnails',
        //autoScaleSlider: false, 
        autoHeight: true,
        //autoHeight: true,
        //autoScaleSliderWidth: '100%', 
        //autoScaleSliderHeight: '85%',
        loop: false,
        //imageScaleMode: 'fit-if-smaller',
        navigateByClick: true,
        numImagesToPreload:2,
        arrowsNav:true,
        arrowsNavAutoHide: true,
        arrowsNavHideOnTouch: true,
        keyboardNavEnabled: true,
        //fadeinLoadedSlide: true,
        globalCaption: false,
        globalCaptionInside: false,
        thumbs: {
          appendSpan: true,
          firstMargin: true,
          paddingBottom: 0
        }
      });


      $('a.close').unbind('click.fb').bind('click.fb', function(e){
        parent.jQuery.fancybox.close();
        e.preventDefault();
      });


	
	
});




})(jQuery)

