jQuery(document).ready(function($){
	var	scrolling = false;
	var contentSections = jQuery('.vNAv-section'),
	verticalNavigation = jQuery('.cd-vertical-nav'),
	navigationItems = verticalNavigation.find('a'),
	navTrigger = jQuery('.cd-nav-trigger'),
	scrollArrow = jQuery('.cd-scroll-down');

	jQuery(window).on('scroll', checkScroll);

	//smooth scroll to the selected section
	verticalNavigation.on('click', 'a', function(event){
		event.preventDefault();
		smoothScroll(jQuery(this.hash));
		verticalNavigation.removeClass('open');
	});

    //smooth scroll to the second section
    scrollArrow.on('click', function(event){
    	event.preventDefault();
    	smoothScroll(jQuery(this.hash));
    });

	// open navigation if user clicks the .cd-nav-trigger - small devices only
	navTrigger.on('click', function(event){
		event.preventDefault();
		verticalNavigation.toggleClass('open');
	});

	function checkScroll() {
		if( !scrolling ) {
			scrolling = true;
			(!window.requestAnimationFrame) ? setTimeout(updateSections, 300) : window.requestAnimationFrame(updateSections);
		}
	}

	function updateSections() {
		var halfWindowHeight = jQuery(window).height()/2,
		scrollTop = jQuery(window).scrollTop();
		contentSections.each(function(){
			var section = jQuery(this),
			sectionId = section.attr('id'),
			navigationItem = navigationItems.filter('[href^="#'+ sectionId +'"]');
			( (section.offset().top - halfWindowHeight < scrollTop ) && ( section.offset().top + section.height() - halfWindowHeight > scrollTop) )
			? navigationItem.addClass('active')
			: navigationItem.removeClass('active');
		});
		scrolling = false;
	}

	function smoothScroll(target) {
		jQuery('body,html').animate(
			{'scrollTop':target.offset().top },
			300
			);
	}
});