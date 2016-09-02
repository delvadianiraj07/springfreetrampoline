(function($){

	// light
	$('.tl1').timeline({
		categories: ['A', 'B', 'C'],
		numberOfSegments: [31, 31, 31],
		yearsOn: false,

	});


    // about-us change word
    //=======================================================
    
    var time_period = ['1934', '1964', '1992', '1993', '1997', '2002', '2003', '2010', 'Today'];

      $(".t_line_node").each(function(index){

				$(this).contents().filter(function(){ return this.nodeType == 3; }).first().replaceWith(time_period[index]);
      
      }); 
      


})(jQuery);
