(function($){

	// 0 for static , 1 for video
	var content_flag;

	media_query_check();

	$(window).resize(function(){
		media_query_check();
	})

    //Media Query Check
    //======================================================= 
    function media_query_check(){
      //console.log(matchMedia);
      if (matchMedia('only screen and (max-width: 1025px)').matches || matchMedia('only screen and (max-width: 1024px) and (orientation:landscape)').matches ){
        load_static_content();
      } else {
        load_animated_content();
      }
    }

    function load_static_content(){
    	$('#quality-video').hide();
    	$('#quality-image').show();
    	content_flag = 0;
    }

    function load_animated_content(){
    	$('#quality-video').show();
    	$('#quality-image').hide();

    	content_flag = 1;

		/*
		//play a second - to avoid the black screen at the beginning
	 	setTimeout(function(){
	        pause_html5_video('#quality-video');
	    }, 1000); //1 second timeout in milliseconds
		*/

		//plays video when the quality-video 
		//=======================================================

	  	var quality_waypoint = new Waypoint({
	        element: $('#quality-video'),
	        handler: function(direction) {
	          if (direction === 'down') {
	          	//check if animated is displayed 
	          	if (content_flag == 1){
					$('#quality-video').fadeIn();
		    		play_html5_video('#quality-video');	          		
	          	}

	          }
	        },

	        offset: '50%'
		});



    }


    // play HTML5 Video
    //=======================================================
    function play_html5_video($element){
      $($element).get(0).play();
    }

    function pause_html5_video($element){
      $($element).get(0).pause();
    }







})(jQuery);