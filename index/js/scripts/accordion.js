  
(function($){

  $(document).ready(function(){

    jQuery(function() {
      jQuery( "#accordion" ).accordion({heightStyle:'content'});
      jQuery('.tag-label-no').hide();
      jQuery('.tag-label-yes').hide();
      refresh_state();
    });


    //panel-one-next go to panel-two
    jQuery('.panel-one-header').click(function(){
      jQuery( "#accordion" ).accordion({ disabled: false })
      jQuery('h2#panel-one').click();
      refresh_state_panel_two()
    });


    //panel-one-next go to panel-two
    jQuery('.panel-one-next-button').click(function(){
      jQuery( "#accordion" ).accordion({ disabled: false });
      jQuery('h2#panel-two').click();
      //tag labels
      jQuery('.tag-label-yes').show();
      jQuery('.tag-label-no').hide();
      refresh_state_panel_two()
    });


    //panel-one-skip go to panel-three
    jQuery('.panel-one-skip-button').click(function(){
      //tag labels
      jQuery('.tag-label-yes').hide();
      jQuery('.tag-label-no').show();
      jQuery('.tag-label-no').css("display", "inline-block");     
      clicked_panel_three_header();
    });


    //panel-three next go to panel-four
    jQuery('.panel-three-next-button').click(function(){
      clicked_panel_four_header();
    });

    //panel-four next go to panel-five
    jQuery('.panel-four-next-button').click(function(){
      clicked_panel_five_header();
    });

    //land on panel one
    jQuery('.land-on-panel-one').click(function(){
      clicked_panel_one_header();
    });


    //mimics the header of the accordion being clicked
    var clicked_panel_one_header = function() {
      jQuery( "#accordion" ).accordion({ disabled: false });
      jQuery('h2#panel-one').click();
      jQuery('.tag-label-no').hide();
      jQuery('.tag-label-yes').hide();
      refresh_state();
    }

    var clicked_panel_three_header = function() {
      jQuery( "#accordion" ).accordion({ disabled: false });
      jQuery('h2#panel-three').click();
      refresh_state();
    }

    var clicked_panel_four_header = function() {
      jQuery( "#accordion" ).accordion({ disabled: false });
      jQuery('h2#panel-four').click();
      refresh_state();
    }

    var clicked_panel_five_header = function() {
      jQuery( "#accordion" ).accordion({ disabled: false });
      jQuery('h2#panel-five').click();
      refresh_state();
    }


    var refresh_state  = function(){
      jQuery('.ui-state-active').nextAll('h2').hide();  
      jQuery('.ui-state-active').prevAll('h2').show();  
      jQuery('.ui-state-active').show();
      jQuery('h2#panel-two').hide();
      jQuery('.reveal-link-container').hide();
      jQuery( "#accordion" ).accordion({ disabled: true });

    };

    var refresh_state_panel_two  = function(){
      jQuery('.ui-state-active').nextAll('h2').hide();  
      jQuery('.ui-state-active').prevAll('h2').show();  
      jQuery('.ui-state-active').show();
      jQuery('.reveal-link-container').hide();
      jQuery( "#accordion" ).accordion({ disabled: true })

    };

    jQuery('.reveal-to-link').click(function(){
      jQuery(this).parents('.install-content-holder:first').siblings('.reveal-link-container:first').show();
    });

  })

})(jQuery)
