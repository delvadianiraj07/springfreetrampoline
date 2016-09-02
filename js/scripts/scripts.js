/*
Dependents:
  - jQuery: vendors/jQuery
  - matchMedia: scripts/jquery.main.js

*/

;(function($){


  $(document).ready(function(jQuery){

    //Media Query Check
    //======================================================= 
    function media_query_check(){

      try{
        //console.log(matchMedia);
        if (matchMedia('only screen and (max-width: 1025px)').matches || matchMedia('only screen and (max-width: 1024px) and (orientation:landscape)').matches ){
          load_static_content();
        } else {

          //Switch between Animated and Static Homepage Panels here : Product Benefits
          //=======================================================
          //load_animated_content();
          load_static_content();
        }

      }catch(error){
        console.log(error)
      }        
    }


    //Load Animated HTML
    //=======================================================
    function load_animated_content(){
      if ($('#animation-container').length){
        //console.log("animation container already cached");
        $('#static-panels').hide();
        $('#animated-panel').show();
        //$.getScript("/sites/all/themes/springfree/js/scripts/animated.js");
        $('#animation-view-port').removeClass('stuck');
        //play_html5_video('#video-dr-keith');

        
      } else {
        //console.log("could not find animation container cached");
        //$('#static-panels').hide();
        //$('#animated-panel').show();

        var $animated_panel = $('#animated-panel');

        $.get("../../components/animation/animated.html").success(function(response, status, jqXhr){
          //console.log(response);
          $animated_panel.html(response);
          $.getScript("../js/vendors/jquery.animateSprite.min.js");          
          $.getScript("../js/vendors/jquery.waypoints.min.js");          
          $.getScript("../js/vendors/inview.min.js");          
          $.getScript("../js/vendors/sticky.js");          
          $.getScript("../js/vendors/skrollr.min.js");          
          $.getScript("../js/vendors/skrollr.menu.min.js");          
          $.getScript("../js/vendors/jquery.transform2d.js");          
          $.getScript("../js/vendors/jquery.easing.js");
          $.getScript("../js/vendors/imagesloaded.pkgd.min.js");                   
          $.getScript("../js/scripts/animated.js");          



        }).error(function(response, status, jqXhr){
          load_static_content();
          //console.log("failed to load animated");
        })

        /*
        $('#animated-panel').load( "/sites/all/themes/springfree/components/animation/animated.html", function(){
          
          //console.log("loaded animated content");
        });
        */
      }
            
    }

    //Load Static HTML
    //=======================================================
    function load_static_content(){
      if ($('#static-container').length){
        $('#static-panels').show();
        $('#animated-panel').hide();
      } else {
        $('#static-panels').show();
        $('#animated-panel').hide();
        /*
        $('#static-panels').load( "components/animation/static.html", '' ,function(){
            console.log("loaded static content");
          });
        */
      }

    }

    //Trigger On Resize
    //=======================================================
    $(window).resize(function(){
      media_query_check();
    });


    // on load
    //=======================================================
      media_query_check();
       
  });

})(jQuery);


