//Saugar's JS

(function($){


  $(document).ready(function(jQuery){    
    
    // init ilightbox for full screen videos
    //=======================================================

/*
    $('.ilightbox').iLightBox([
        {
          url: 'https://www.youtube.com/embed/H0m7MabtIy8?autoplay=1&rel=0&autohide=1&enablejsapi=1',
          type: 'iframe',
          options: { 
            //smartRecognition: true,
            skin: 'light' 
          } 
        }
      ]);
*/
    
    $('.ilbimg').iLightBox({

				skin: 'springfree', //dark, light, parade, smooth, metro-black, metro-white and mac
				path: 'horizontal',
				controls: {
					fullscreen: false
				},
				social: {
  				buttons: {
    				facebook: true,
    				twitter: true,
    				googleplus: true
  				}
				}
			});
		
		
		$('.ilbvid').iLightBox({
      skin:'springfree',
      controls: {
        fullscreen: false
      }
		});

    /*** For multitple videos on the same page, iLightbox needs to be initilzed per video separately. ***/
    
    $('.ilbvid-prod-hero').iLightBox({
      skin:'springfree',
      controls: {
        fullscreen: false
      }
		});

    $('.ilbvid-prod-gallery').iLightBox({
      skin:'springfree',
      controls: {
        fullscreen: false
      }
		});


    $('.ilbvid-bouncy').iLightBox({
      skin:'springfree',
      controls: {
        fullscreen: false
      }
		});

		
		/*** Homepage videos for STATIC version of animation ONLY ****/
		/***   Pop-up for videos for animation is initialized in /theme/springfree/components/animation/animated.html ****/		
    $('.ilbvid-rods1').iLightBox({
      skin:'springfree',
      controls: {
        fullscreen: false
      }
		});
    $('.ilbvid-frame1').iLightBox({
      skin:'springfree',
      controls: {
        fullscreen: false
      }
		});

    $('.ilbvid-softedge1').iLightBox({
      skin:'springfree',
      controls: {
        fullscreen: false
      }
		});

    $('.ilbvid-net1').iLightBox({
      skin:'springfree',
      controls: {
        fullscreen: false
      }
		});		

    
  })
})(jQuery);    