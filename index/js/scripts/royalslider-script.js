
(function($){


$(document).ready(function(){


  // home page 
  // =======================================================
  
  
  
  /*
  $('#homepage-hero-carousel-rs').royalSlider({
    autoHeight : true,
    arrowsNav: true,
    arrowsNavAutoHide: false,
    navigateByClick: false,
    //loop:true,
    autoPlay: {
        // autoplay options go gere
        enabled: true,
        delay:5000
        //pauseOnHover: true
      }
  });
  */


  // qualtiy page 
  // =======================================================

  /*
  $('#quality-carousel-rs').royalSlider({
    autoHeight : true,
    arrowsNav: false,
    arrowsNavAutoHide: false,
    navigateByClick: false,
    controlsInside:true,
  });

  var quality_carousel_rs = $('#quality-carousel-rs').data('royalSlider');

  if (typeof quality_carousel_rs !== "undefined"){
    $('.quality-slider-next').click(function(event){
      event.preventDefault();
      quality_carousel_rs.next();
    })
  }
  */
  
  // model selector
  // =======================================================

  /*

  $('#model-selector-rs').royalSlider({
    autoHeight : true,
    arrowsNavAutoHide: false,
    navigateByClick: false,
    arrowsNav: false
  });

  var reference_id,
      model_selector_rs = $('#model-selector-rs').data('royalSlider');

  if (typeof model_selector_rs !== "undefined"){

    model_selector_rs.updateSliderSize(true);

    model_selector_rs.ev.on('rsAfterSlideChange', function(event) {
       // console.log(model_selector_rs.currSlideId);
        update_active_pagination(model_selector_rs.currSlideId);
    });

    $('#model-selector .btn-prev').click(function(event){
      event.preventDefault();
      model_selector_rs.prev();
    });
    
    $('#model-selector .btn-next').click(function(event){
      event.preventDefault();
      model_selector_rs.next();
    });

    $('#compact-round-thumb a').click(function(event){
      $('.active').removeClass('active');
      event.preventDefault();
      model_selector_rs.goTo(5);
    });

    $('#medium-round-thumb a').click(function(event){
      event.preventDefault();
      model_selector_rs.goTo(4);  
    });

    $('#medium-oval-thumb a').click(function(event){
      event.preventDefault();
      model_selector_rs.goTo(3);
    });

    $('#large-oval-thumb a').click(function(event){
      event.preventDefault();
      model_selector_rs.goTo(2);
    });

    $('#large-square-thumb a').click(function(event){
      event.preventDefault();
      model_selector_rs.goTo(1);
    });

    $('#jumbo-square-thumb a').click(function(event){
      event.preventDefault();
      model_selector_rs.goTo(0);
    });

  }


  function update_active_pagination(slide){
    switch(slide){
      case 0:
        reference_id = $('.product-0');
        $('.active').removeClass('active');
        reference_id.addClass('active');
        break;

      case 1:
        reference_id = $('.product-1');
        $('.active').removeClass('active');
        reference_id.addClass('active');
        break;

      case 2:
        reference_id = $('.product-2');
        $('.active').removeClass('active');
        reference_id.addClass('active');
        break;

      case 3:
        reference_id = $('.product-3');
        $('.active').removeClass('active');
        reference_id.addClass('active');
        break;

      case 4:
        reference_id = $('.product-4');
        $('.active').removeClass('active');
        reference_id.addClass('active');
        break;

      case 5:
        reference_id = $('.product-5');
        $('.active').removeClass('active');
        reference_id.addClass('active');
        break;
    }   
  }
  */

  // accessories
  // =======================================================
  /*
  $('#shop-accessories-rs').royalSlider({
    //autoScaleSlider : true,
    autoHeight:true,
    arrowsNavAutoHide: false,
    navigateByClick: false,
    arrowsNav: false
  });

  var shop_accessories_rs = $('#shop-accessories-rs').data('royalSlider');

  if (typeof shop_accessories_rs !== "undefined"){

    $('.shop-accessories .btn-prev').click(function(event){
      event.preventDefault();
      shop_accessories_rs.prev();
    });
    $('.shop-accessories .btn-next').click(function(event){
      event.preventDefault();
      shop_accessories_rs.next();
    });
  }

  if(typeof($('#accessories-tab'))!== "undefined"){
    console.log("tabbed in")
    $('#accessories-tab a').tab();
  }
  */
  
  // safety carousel
  // =======================================================
  
  /*
  $('#safety-carousel').royalSlider({
    autoHeight: true,
    //updateSliderSize: true,
    //autoScaleSliderHeight: 540,
    arrowsNavAutoHide: false,
    navigateByClick: false,
    arrowsNav: false
  });



  var safety_rs = $('#safety-carousel').data('royalSlider');

  if(typeof safety_rs !== "undefined"){

    $('#continue-carousel-button').hide();
    $('#learn-carousel-button').hide();

    $('#continue-carousel-button').click(function(event){
      event.preventDefault();
      safety_rs.next();
    });

    $('#intro-continue-carousel').click(function(event){
      event.preventDefault();
      safety_rs.next();
    });


    safety_rs.ev.on('rsBeforeMove', function(event, type, userAction) {
       //init_safety_tab();
       console.log(type);

       if (type == 0){
        $('#continue-carousel-button').hide();
        $('#learn-carousel-button').hide();

       } else if (type != 4) {
        $('#learn-carousel-button').hide();    
        $('#continue-carousel-button').show();

       } else if (type == 4) {
        $('#continue-carousel-button').hide();
        $('#learn-carousel-button').show();        
       }

    });

    safety_rs.ev.on('rsAfterSlideChange', function(event) {
       //init_safety_tab();
      if (safety_rs.currSlideId == 4){
        $('#continue-carousel-button').hide();
        $('#learn-carousel-button').show();    
      }
    });

  }
  
  */


});



})(jQuery);

