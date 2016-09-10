(function($){


    //var $sprite_image_large  = $('#sprite_image_large'); 

console.log("animated div laoded");

$('#curtain-revealed').hide();

  $(window).load(function(){

    // cache
    //=======================================================
    var $animation_container = $('#animation-container'),       //entire length of the animation
        $animation_view_port = $('#animation-view-port'),       //contains the length of the viewport
        $image_container     = $('#image-container'),           //traforms: scale
        $sprite_image_large  = $('#sprite_image_large'),        //css pulls the large image in
        $circle_mask         = $('#circle-mask'),
        $next_button         = $('#next_button'),
        $next_button_link    = $('#next_button > a'),
        current_scene = 0,                                      // mark scene # the viewport is in
        previous_scene,                                         // to cache prev. scene
        permission_toSceneOne   = 1,
        permission_toSceneTwo   = 1,
        permission_toSceneThree = 1,
        scene_copy = $('.scene-copy');




        // ImagesLoaded plugin
        //=======================================================

        //large trampoline images
          //var $sprite_image_large  = $('#sprite_image_large'); 

        
        $('#curtain-down').show();

        //darcyclarke's comment on Jun 25, 2012 - https://github.com/desandro/imagesloaded/issues/29
        var images = $('.bg-img');
        $.each(images, function(){
            var el = $(this),
            image = el.css('background-image').replace(/'/g, '').replace(/url\(|\)$/ig, '');
            console.log('image: ' + image);
            if(image && image !== '' && image !== 'none'){
                images = images.add($('<img>').attr('src', image));

            } else {
              console.log("error no attribue src set on image");
            }
            if(el.is('img')){
              images = images.add(el);
            } else {
              console.log("elment is not image");
            }              
        });

        images.imagesLoaded(function(){
            $('#curtain-down').hide();
            $('#curtain-revealed').fadeIn();
            //console.log("loaded inside!");
        });


    //height of top nav, main nav and carousel
    var full_height = ($('#header').height()) + ($('#homepage-hero-carousel').height());

    // init
    //=======================================================
      
      waypoint_init();
      $next_button.hide();                     // scroll/click to continue hide at first
      //$(window).scrollTop(0);
      $next_button.hide();


    // show copy depending on the scene
    //=======================================================    
    var show_copy = function(current_scene){

      //console.log("showcopy func: current_scene " + current_scene);
      switch (current_scene){
        case 0:
          //$('.scene-copy').stop();
          scene_copy.stop();
          scene_copy.hide();
          $('.scene-zero-copy').fadeIn(1500);
          set_marginTop_howWeMake_section();          
        break;

        case 1:
          scene_copy.stop();
          scene_copy.hide();
          $('.scene-one-copy').fadeIn(1500);
          $('.scene-zero-copy').fadeOut(1);
          set_marginTop_howWeMake_section();

        break;

        case 2:
          scene_copy.stop();
          scene_copy.hide();
          $('.scene-two-copy').fadeIn(1500);
          $('.scene-zero-copy').fadeOut(1);
          remove_marginTop_howWeMake_section();
        break;

        case 3:
          scene_copy.stop();
          scene_copy.hide();
          $('.scene-three-copy').fadeIn(1500);
          $('.scene-zero-copy').fadeOut(1);
          remove_marginTop_howWeMake_section();
        break;

        case 4:
          scene_copy.stop();
          scene_copy.hide();
          $('.scene-four-copy').fadeIn(1500);
          $('.scene-zero-copy').fadeOut(1);
          remove_marginTop_howWeMake_section();
        break;
      }

    };





    // returns the height of the animation viewport
    //=======================================================   
    function container_calculations(){

      var container_height,
          minimum_viewport = 768,
          browser_viewport = $(window).height(); //returns height of browser viewport

      if (browser_viewport > minimum_viewport){
         container_height = browser_viewport * 4;
      } else {
         container_height = minimum_viewport * 4;
         next_button_noArrow();
      }

      return container_height;

    }

    // set height of animation container
    //=======================================================
    function set_animation_container_height(){
        $animation_container.height((container_calculations())*5);
    }

    // set height of animation viewport
    //=======================================================
    function set_animation_viewport_height(){
        $animation_view_port.height((container_calculations()/4));
    }

    // set margin of how-we-make section
    //=======================================================
    function set_marginTop_howWeMake_section(){
      var margin_top_by = 0.015 * container_calculations();
      $('#how-we-make').css('margin-top', margin_top_by);
    }

    function onResize_marginTop_howWeMake_section(){
      if (  ($('#how-we-make').css('margin-top')) > 0) {
        var margin_top_by = 0.015 * container_calculations();
        $('#how-we-make').css('margin-top', margin_top_by);    
      }
    }    

    function remove_marginTop_howWeMake_section(){
      $('#how-we-make').css('margin-top', 0);
    }

    function set_top_trampolineContainer(){
      var top_by = 0.08 * container_calculations();
      $('#trampoline-container').css('top', top_by);
    }

    // hide the continue arrow when length below minimum
    //=======================================================
    function next_button_noArrow(){
      $('#next_button').css('bottom', 0);
    }

    function next_button_withArrow(){
      $('#next_button').css('bottom', '6%'); 
    }



    // stick animation viewport to the top
    //=======================================================

    function stick_top_view() {
      $animation_view_port.removeClass('unstuck');
      $animation_view_port.addClass('stuck');
    };

    function unstick_top_view() {
      $animation_view_port.removeClass('stuck');
      $animation_view_port.addClass('unstuck');

    };

    function remove_unstick_top_view(){
      $animation_view_port.removeClass('unstuck');
    };

    // jQuery sprite sheet animation
    //=======================================================

    $image_container.hide();
    $sprite_image_large.animateSprite({
      coloumns  :24,
      fps       :24,
      autoplay  :false,
      animations: {
        back_play: [13, 13, 12, 11, 10, 9, 8],        //back to scene 0
        mat_rods:  [8, 9, 10, 11, 12, 13],        //scene 1
        frame:     [14, 15, 16, 17, 18, 19, 20],      //scene 2
        mat:       [21, 22, 23, 24, 1, 2],         //scene 3
        net:       [3, 4, 5, 6, 7, 8, 9] //scene 4
      }

    });


    //jQuery Animation
    //=======================================================
      
      // enter circle mask
      function enter_circle_mask(current_scene, followup_animation) {
        
        $circle_mask.animate(

          //property to animate
          {opacity:0.9, transform: 'scale(1)'},
          
          //options
          {duration: 1100, easing: 'easeOutCirc', queue: true, complete:
          
            //call back
            function(){

              //fire if there is a follow up animation
              if (typeof followup_animation !== 'undefined'){
                followup_animation(current_scene);
              }
            }
          }
        );
      }

      // exit circle mask
      function exit_circle_mask(current_scene, followup_animation) {
        
        //debug
        //console.log( "enter circle:: "+ "scene: " + current_scene + " followup_animation: " + followup_animation);
        
        $circle_mask.finish()
        $circle_mask.animate(

          //property to animate
          {opacity: 0},

          //options          
          {duration: 700, queue: true, complete:

            //call back
            function(){
              
              $circle_mask.css({transform:'scale(20)', opacity:1});

              //fire if there is a follow up animation
              if (typeof followup_animation !== 'undefined'){
                //console.log("if follow up resulted to true in : " + current_scene);
                //console.log("follow up animation is : " + followup_animation);
                followup_animation(current_scene);
              }

              //console.log("circle mask exit complete: " + current_scene);
            }
          }
        );
      }


    // thumbnail navigation - state
    //=======================================================
    function deactivate_scene_link($element) {
      $($element).removeClass('scene-link-active');
    }

    function activate_scene_link($element) {
      $($element).addClass('scene-link-active');
    }

    function contrast_links($element){
      $($element).addClass('contrast-link');
    }

    function decontrast_links($element){
      $($element).removeClass('contrast-link');
    }

    // scene skip click
    //=======================================================
    $('.scene-link').click(function(){
      var retrieve_scene_val = /\d+/g;
      var selected_link = ($(this).attr('id')).match(retrieve_scene_val);
      
      if ((Math.abs(selected_link[0] - current_scene)) > 1){
        //console.log("greater than one");
        // console.log(selected_link[0] == 1);
        doNotAllow_permission_toAnimate();


        switch (selected_link[0]){

          case "0":
            //console.log("g1: case matched" + selected_link[0]);

            $("#scene0-shadow-link")[0].click();
            break;

          case "1":
            //console.log("g1: case matched" + selected_link[0]);
            permission_toSceneOne = 1;
            $("#scene1-shadow-link")[0].click();
            break;

          case "2":
            //console.log("g1: case matched" + selected_link[0]);
            permission_toSceneTwo = 1;
            $("#scene2-shadow-link")[0].click();
            break;

          case "3":
            //console.log("g1: case matched" + selected_link[0]);
            permission_toSceneThree = 1;
            $("#scene3-shadow-link")[0].click();
            break;

          case "4":
            //console.log("g1: case matched" + selected_link[0]);
            $("#scene4-shadow-link")[0].click();
            break;

        }
      } else {
        //console.log("less than one");
        switch (selected_link[0]){
          case "0":
            //console.log("g2: case matched" + selected_link[0]);
            $("#scene0-shadow-link")[0].click();
            break;

          case "1":
            //console.log("g2: case matched" + selected_link[0]);
            $("#scene1-shadow-link")[0].click();
            break;

          case "2":
            //console.log("g2: case matched" + selected_link[0]);
            $("#scene2-shadow-link")[0].click();
            break;

          case "3":
            //console.log("g2: case matched" + selected_link[0]);
            $("#scene3-shadow-link")[0].click();
            break;

          case "4":
            //console.log("g2: case matched" + selected_link[0]);
            $("#scene4-shadow-link")[0].click();
            break;

        }        
      }
    });

    // reset permission to animate back to 1 for all
    function reset_permission_toAnimate(){
        permission_toSceneOne   = 1;
        permission_toSceneTwo   = 1;
        permission_toSceneThree = 1;
        //console.log("permission reset");
    }

    // switch off all permissions
    function doNotAllow_permission_toAnimate(){
        permission_toSceneOne   = 0;
        permission_toSceneTwo   = 0;
        permission_toSceneThree = 0;
    }


    /* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - 
      - docs -
      #image-container    : controls the scale
      #sprite_image_large : controls the position
     - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */

      // zoom to trampoline mat rods
      function to_scene_one() {
        
        //cache previous scene
        previous_scene = current_scene;

        $('.scene-copy').hide();

        //show image container of the trampoline and scale
        $image_container.show();
        $image_container.animate({transform: 'scale(1.3)', top: '-705px', left: '-930px'}, {duration:800, easing: 'easeOutCirc'});

        //trampoline rotate                                             
        $sprite_image_large.animateSprite('play', 'mat_rods');

        //hide video
        $('#video-dr-keith').fadeOut(200);

        //set circle color
        $circle_mask.css({'border-color': '#14a6d9'});

        //check if returning back to this scene
        /*        if (previous_scene !== 0){
          //remove circle - used when returning up to this scene
           exit_circle_mask(current_scene);
        }*/

        //set current_scene
        current_scene = 1;

        $circle_mask.css({transform:'scale(20)', opacity:0.9});

        //zoom in circle and show copy
        enter_circle_mask(current_scene, show_copy);

        //update scene-link navigation
        deactivate_scene_link('.scene-link');
        activate_scene_link('#scene1-link');

        //contrast link
        contrast_links($('#next_button > a'));
        contrast_links($('.scene-link-active'));

        //set next button href
        update_next_button(current_scene);

      }

      // zoom to trampoline mat rods
      function to_scene_two() {
        
        //cache previous scene
        previous_scene = current_scene;
        
        $('.scene-copy').hide();

        //accomodate scene 0 to scene 2
         if (permission_toSceneOne == 0){
          //trampoline rotate                                             
          $sprite_image_large.animateSprite('play', 'mat_rods');

          //show image container of the trampoline and scale
          $image_container.show();

          //hide video
          $('#video-dr-keith').hide();

          $('.scene-zero-copy').hide();
         }


        $circle_mask.animate({opacity:0}, {duration:700, queue: true, complete: function(){
          
          //reset circle
          $circle_mask.css({transform:'scale(20)', opacity:0.9});

          //set circle color
          $circle_mask.css({'border-color': '#f3f3f3'});

          //trampoline rotate                                             
          $sprite_image_large.animateSprite('play', 'frame');

          //show image container of the trampoline and scale
          $image_container.animate({transform: 'scale(1.3)', top: '-680px', left: '-870px'}, {duration:800, easing: 'easeOutCirc'});

          //set scene
          current_scene = 2;

          //zoom in circle and show copy
          enter_circle_mask(current_scene, show_copy);

          //set next button href
          //update_next_button(current_scene);

          //update scene-link navigation
          deactivate_scene_link('.scene-link');
          activate_scene_link('#scene2-link');

          //contrast link
          decontrast_links($('#next_button > a'));
          decontrast_links($('.scene-link-active'));

          //set next button href
          update_next_button(current_scene);

        }});

      }

      // zoom to trampoline mat rods
      function to_scene_three() {
        
        //cache previous scene
        previous_scene = current_scene;

        //hide all copy
        //$('.scene-one-copy').hide();

        $('.scene-copy').hide();

        //accomodate scene 0 to scene 3
        if (permission_toSceneTwo == 0){
          //trampoline rotate                                             
          $sprite_image_large.animateSprite('play', 'mat_rods');

          //show image container of the trampoline and scale
          $image_container.fadeIn(100);

          //hide video
          $('#video-dr-keith').hide();

          $('.scene-zero-copy').hide();;        
        }

        $circle_mask.animate({opacity:0}, {duration:700, queue: true, complete: function(){
          
          $circle_mask.css({transform:'scale(20)', opacity:0.9});

          //set circle color
          $circle_mask.css({'border-color': '#fcf2e2'});

          //trampoline rotate                                             
          $sprite_image_large.animateSprite('play', 'mat');

          //show image container of the trampoline and scale
          $image_container.animate({transform: 'scale(1.3)', top: '-560px', left: '-1020px'}, {duration:800, easing: 'easeOutCirc'});

          //set scene
          current_scene = 3;

          //zoom in circle and show copy
          enter_circle_mask(current_scene, show_copy);

          //set next button href
          //update_next_button(current_scene);

          //update scene-link navigation
          deactivate_scene_link('.scene-link');
          activate_scene_link('#scene3-link');

          //contrast link
          decontrast_links($('#next_button > a'));
          decontrast_links($('.scene-link-active'));

          //set next button href
          update_next_button(current_scene);
        }});
      }

      // zoom to trampoline mat rods
      function to_scene_four() {
        
        //cache previous scene
        previous_scene = current_scene;

        //hide all copy
        $('.scene-copy').hide();

        //accomodate scene 0 to scene 4
        if (permission_toSceneThree == 0){
                //trampoline rotate                                             
                $sprite_image_large.animateSprite('play', 'mat_rods');

                //show image container of the trampoline and scale
                $image_container.fadeIn(50);

                //hide video
                $('#video-dr-keith').hide();

                $('.scene-zero-copy').hide();
        }

        //fade circle out first, upon complete, bring the new circle in
        $circle_mask.animate({opacity:0}, {duration:700, queue: true, complete: function(){

          $circle_mask.css({transform:'scale(20)', opacity:0.9});

          //set circle color
          $circle_mask.css({'border-color': '#444444'});

          //trampoline rotate                                             
          $sprite_image_large.animateSprite('play', 'net');

          //show image container of the trampoline and scale
          $image_container.animate({transform: 'scale(1.3)', top: '-320px', left: '-230px'}, {duration:800, easing: 'easeOutCirc'});

          //set scene
          current_scene = 4;

          //remove previous circle 
          enter_circle_mask(current_scene, show_copy);

          //set next button 
          //$next_button.fadeOut(500);

          //set next button href
          //update_next_button(current_scene);

          //set next button href
          update_next_button(current_scene);    


          //update scene-link navigation
          deactivate_scene_link('.scene-link');
          activate_scene_link('#scene4-link');

          //contrast link
          contrast_links($('#next_button > a'));
          contrast_links($('.scene-link-active'));


        }});
      }

      // zoom to trampoline mat rods
      function back_to_intro() {
        
        //cache previous scene
        previous_scene = current_scene;
        
        //set scene
        current_scene = 0;

        //hide all copy
        $('.scene-copy').hide();

        //remove circle - used when returning up to this scene
        exit_circle_mask(current_scene, show_copy);

        //trampoline rotate                                             
        $sprite_image_large.animateSprite('play', 'back_play');

        //hide image container of the trampoline and scale
        $image_container.animate({transform: 'scale(0.4)', top: '-320px', left: '-420px'}, {duration:800, easing: 'easeOutCirc'});
        $image_container.fadeOut(50);

        //show video
        $('#video-dr-keith').fadeIn(50);

        //set circle color
        $circle_mask.css({'border-color': '#56bdef'});

        //set next button 
        $next_button.fadeIn(100);

        //set next button href
        update_next_button(current_scene);

        //play video
        play_html5_video('#video-dr-keith');

        //update scene-link navigation
        deactivate_scene_link('.scene-link');
        activate_scene_link('#scene0-link');

        //contrast link
        decontrast_links($('#next_button > a'));
        decontrast_links($('.scene-link-active'));      
      }


    // jQuery skrollr init
    //=======================================================
    
    //var trampoline_element = $('#animation-view-port');
    var keyFrame0, keyFrame1, keyFrame2, keyFrame3, keyFrame4;
    var s = skrollr.init({

      constants:{
        keyframe0: function(){
          keyFrame0 = ((container_calculations())/4)*(0.4);
          //console.log("keyFrame0: " + keyFrame0);
          return keyFrame0;
        },

        keyframe1: function(){
          keyFrame1 = ((container_calculations())/4)*(3);
          //console.log("keyFrame2: " + keyFrame1);
          return keyFrame1;
        },
      
        keyframe2: function(){
          keyFrame2 = ((container_calculations())/4)*(7);
          //console.log("keyFrame3: " + keyFrame2);
          return keyFrame2;
        },

        keyframe3: function(){
          keyFrame3 = ((container_calculations())/4)*(11);
          //console.log("keyFrame4: " + keyFrame3);
          return keyFrame3;
        },

        keyframe4: function(){
          keyFrame4 = ((container_calculations())/4)*(15);
          //console.log("keyFrame4: " + keyFrame4);
          return keyFrame4;
        }
      },

      keyframe: function(element, keyframe, direction ) {
          //name will be one of data500, dataTopBottom, data_offsetCenter

          //console.log(element);
          //console.log(keyframe);
          //console.log(direction);


         if(keyframe === 'data_keyframe1Top' && direction === 'down') {
            //console.log(getScrollTop());
            
            if (permission_toSceneOne == 1){
              //console.log("to scene one keyframe fired");
              to_scene_one();
              reset_permission_toAnimate();
              $next_button.fadeIn(1);
            }
          }

          else if(keyframe === 'data_keyframe2Top' && direction === 'down') {
            //console.log(getScrollTop());
            
            if (permission_toSceneTwo == 1){
              to_scene_two();
              reset_permission_toAnimate();
            }
          }

          else if(keyframe === 'data_keyframe3Top' && direction === 'down') {
            //console.log(getScrollTop());
            
            if (permission_toSceneThree == 1){
              to_scene_three();
              reset_permission_toAnimate();
            }
          }

          else if(keyframe === 'data_keyframe4Top' && direction === 'down') {
            //console.log(getScrollTop());
            to_scene_four();
            reset_permission_toAnimate();
          }

          else if(keyframe === 'data_keyframeIntro' && direction === 'up') {
            //console.log("KEYFRAME 1 **************");
            $next_button.fadeIn(1000);
          }

          else if(keyframe === 'data_keyframe1Top' && direction === 'up') {
            //console.log(getScrollTop());
            back_to_intro();
            $next_button.fadeIn(1000);
            reset_permission_toAnimate();
          }

          else if(keyframe === 'data_keyframe2Top' && direction === 'up') {
            //console.log(getScrollTop());
            if (permission_toSceneOne == 1){
              to_scene_one();
              $next_button.fadeIn(1000);
              reset_permission_toAnimate();
            }
          }

          else if(keyframe === 'data_keyframe3Top' && direction === 'up') {
            //console.log(getScrollTop());
            
            if (permission_toSceneTwo == 1){
              to_scene_two();
              $next_button.fadeIn(1000);
              reset_permission_toAnimate();
            }
          }

          else if(keyframe === 'data_keyframe4Top' && direction === 'up') {
            //console.log(getScrollTop());
            
            if (permission_toSceneThree == 1){
              to_scene_three();
              $next_button.fadeIn(1000);
              reset_permission_toAnimate();
            }
          }
      },

      render: function(data) {
          // document.querySelector('.scrollpos').innerHTML = data.curTop;
          // console.log(data.curTop);
      },

      forceHeight: false

    });



    // jQuery Skrollr Init
    //=======================================================
    skrollr.menu.init(s, {animate:true, updateUrl: false});

    //Span anchor position - for Skrollr Init
    //=======================================================
    function anchor_position_init(){
      $('#scene0').css('top', (keyFrame0 + full_height));
      $('#scene1').css('top', (keyFrame1 + full_height));
      $('#scene2').css('top', (keyFrame2 + full_height));
      $('#scene3').css('top', (keyFrame3 + full_height));
      $('#scene4').css('top', (keyFrame4 + full_height));
    }



    // play HTML5 Video
    //=======================================================
    function play_html5_video($element){
      $($element).get(0).play();
    }

    play_html5_video('#video-dr-keith');


    // init
    //=======================================================
    initialize_animation();
    function initialize_animation(){

      set_animation_viewport_height();
      set_animation_container_height();
      set_marginTop_howWeMake_section();
      set_top_trampolineContainer();
      anchor_position_init();
      $('.scene-copy').hide();
      //scene_copy_init();
      //$( '.swipebox-video' ).swipebox();
      s.refresh();

    }




    // trigger efficiently once on window resize using Debouncer
    // 

    $(window).on("debouncedresize", function(event) {

      console.log(current_scene);
      
      set_animation_viewport_height();
      set_animation_container_height();

      //height of top nav, main nav and carousel
      var full_height = ($('#header').height()) + ($('#homepage-hero-carousel').height());

      waypoint_init();
      onResize_marginTop_howWeMake_section();
      set_top_trampolineContainer();
      anchor_position_init();
      //$next_button.hide();
      remove_unstick_top_view();

      //set next button href
      update_next_button(current_scene);
      
      s.refresh();
      skrollr.menu.init(s, {animate:true, updateUrl: false});

      if (current_scene == 1) {
        play_html5_video('#video-dr-keith');
      }

      if (current_scene == 4 && ($('#scene3-headers:hidden').length !== 0)) {
        to_scene_four();
      }
 
    });


    // trigger On window resize
    //=======================================================
    $(window).resize(function(){      


    });


    //Waypoint JS
    //=======================================================
    var waypoint_state,
        sticky_viewport,
        waypoint_bottom;

    function waypoint_init(){
      
      if (waypoint_state == 1){
        //console.log("entered if");
        //console.log("sticky viewport" + sticky_viewport);
        sticky_viewport.destroy();
        waypoint_bottom.destroy();
        waypoint_state = 0;
      }

      waypoint_state = 1;
      set_animation_viewport_height();
      set_animation_container_height();

      //sticks animation viewport when it comes to view
      sticky_viewport = new Waypoint.Sticky({
        element: $animation_view_port,
        handler: function(){

          //stuck class is added by Sticky js plugin
          $next_button.fadeIn(100);
          //console.log("next button faded in")
        },

      });

      //unsticks animation viewport once scrolled to the end, sticks back up when going upwards
      waypoint_bottom = new Waypoint({
        element: $('.post-animation')[0],
        handler: function(direction) {
          if (direction === 'down') {
            unstick_top_view();
            $next_button.fadeOut(1);
          }
          else if (direction === 'up') {
            stick_top_view();
            $next_button.fadeIn(1);
          }
        },

        offset: '100%'
      });
    }



    // update next button
    //======================================================= 
    function update_next_button(current_scene){
      switch (current_scene){
        case 0:
          $next_button_link.attr("href", "#scene1");
          break;

        case 1:
          $next_button_link.attr("href", "#scene2");
          break;

        case 2:
          $next_button_link.attr("href", "#scene3");
          break;

        case 3:
          $next_button_link.attr("href", "#scene4");
          break;

        case 4:
          $next_button_link.attr("href", "#post-animation");
          break;          
      }
    };








  });

})(jQuery);




//===========================



  // initializing iLightbox video
  (function($){
    $(document).ready(function(jQuery){
      
      $('.ilbvid-rods').iLightBox({
        skin:'springfree',
        controls: {
          fullscreen: false
        }
      });

      $('.ilbvid-frame').iLightBox({
        skin:'springfree',
        controls: {
          fullscreen: false
        }

      });

      $('.ilbvid-softedge').iLightBox({
        skin:'springfree',
        controls: {
          fullscreen: false
        }
      });

      $('.ilbvid-net').iLightBox({
        skin:'springfree',
        controls: {
          fullscreen: false
        }
      });



    });
  })(jQuery);