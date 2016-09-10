
(function($){
  $(document).ready(function(){

    $('div.nav-tabs div.slide-one a').click(function (e) {
      $('div.nav-tabs div.slide-one.active').removeClass('active');
      $(this).parent('div').addClass('active');
    });

    $('div.nav-tabs div.slide-two a').click(function (e) {
      $('div.nav-tabs div.slide-two.active').removeClass('active');
      $(this).parent('div').addClass('active');
    });    

    $('div.nav-tabs div.slide-three a').click(function (e) {
      $('div.nav-tabs div.slide-three.active').removeClass('active');
      $(this).parent('div').addClass('active');
    });

    $('div.nav-tabs div.slide-four a').click(function (e) {
      $('div.nav-tabs div.slide-four.active').removeClass('active');
      $(this).parent('div').addClass('active');
    });

    var process_marker = true; //ensures media query check runs only once

    //detect mobile
    function media_query_check(){
      //console.log(matchMedia);
      if (matchMedia('only screen and (max-width: 767px)').matches){
        //console.log(" width less than 768");
        init_safety_tab();
        process_marker = false;
      } else {
        init_safety_untabbed();
      }
    }

    function init_safety_tab(){
      if(process_marker) {
        $('.first-tab-link').each(function(){
          $(this).addClass('active');
        });

        $('.second-tab-link').each(function(){
          $(this).removeClass('active');
        });        
      }

    }


    function init_safety_untabbed(){
      $('.tab-pane').addClass('active');
      //console.log("untabbed");
    }

    $(window).resize(function(){
      media_query_check();
    });

    //see which column is active, trigger click on it

    media_query_check();




    //src: http://davidwalsh.name/orientation-change
    // Find matches
    var mql = window.matchMedia("(orientation: portrait)");

    // Add a media query change listener
    mql.addListener(function(){

        setTimeout(function(){
            media_query_check();
        },500);
    });






  });
  

})(jQuery);


