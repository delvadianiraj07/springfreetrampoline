// page init
jQuery.noConflict();
jQuery(function(){
    initTabs();
    initLightbox();
    initBackgroundResize();
    initSameHeight();
    initCustomHover();
    jQuery('input, textarea').placeholder();
    initNavbarToggleFix();
    initCustomForms();
    fixBSDropdown();
    initFitVids();
    initAddClasses();
    //skrollr_init();
    scrollTo_init();
    header_shadow_init();
});

jQuery(document).ready(function(){
    initProducts();
});

jQuery(window).load(function(){    
    initBackgroundResize();
    initCalculateHeaderHeight();

});

jQuery(window).resize(function(){
    initCalculateHeaderHeight();
    scrollTo_init();
    window.picturefill();
    header_shadow_init();

});



try{

    // detect orientation change
    // src: http://davidwalsh.name/orientation-change
    // Find matches
    var mql = window.matchMedia("(orientation: portrait)");

    // Add a media query change listener
    mql.addListener(function(){

        setTimeout(function(){
            window.picturefill();
            initBackgroundResize();
            //console.log("picture fill fire on orientation");

        },500);
    });

}
catch(error){
    console.log(error);
}





function initProducts(){
    if(jQuery('.compare-block').length !== 0 ){
        jQuery('.compare-block').productsList({
            desktopList: '.table-block',
            rows: '.table-row',
            cols: '.table-col',
            mobileHolder: '.mobile-list',
            sortBtns: 'data-sort',
            sortAttr: 'data-sort-value'
        });
    }

}

// add class on click
function initAddClasses() {
    jQuery('.highlight a').clickClass({
        classAdd: 'active',
        addToParent: true
    });
}


function fixBSDropdown(){
    jQuery('.dropdown').each(function(){
        var holder = jQuery(this);
        var slide = holder.find('.dropdown-menu');
        var flag = false;
        slide.on('click',function(e){
            flag = true;
        });
        holder.on('hide.bs.dropdown', function () {
            if(flag){
                flag = false;
                return false;
            }
        });
    });
}

function initCalculateHeaderHeight(){
    var headerHeight = jQuery("#header").height();
    //check for tablet
    try{

        if (matchMedia('only screen and (min-width: 991px)').matches){
            jQuery('#header').parent('#wrapper').css('paddingTop', (156));

        } else {
            jQuery('#header').parent('#wrapper').css('paddingTop', (headerHeight));
        }

        //detect homepage and greater than mobile
        if ((matchMedia('only screen and (min-width: 768px)').matches) && jQuery('#header').hasClass('homepage-marker')) {
            jQuery('#header').parent('#wrapper').css('paddingTop', 0);

        };
    }catch(error){
        console.log(error)
    }

    
}

function initNavbarToggleFix(){
    jQuery('.navbar-toggle').on('click', function(){
        if(jQuery(this).hasClass('collapsed')){
            jQuery(this).find('.btntoggle').css('background', '#f2f2f2');
            jQuery(this).find('.icon-bar').css('background', '#033333');
        }
        else{
            jQuery(this).find('.btntoggle').css('background', '#00afe0');
            jQuery(this).find('.icon-bar').css('background', '#fff');
        }
    });
    jQuery('.navbar-toggle[aria-expanded="false"]').on('mouseenter', function(){
        jQuery(this).find('.btntoggle').css('background', '#f2f2f2');
        jQuery(this).find('.icon-bar').css('background', '#00afe0');
    }).on('mouseleave', function(){
        jQuery(this).find('.btntoggle').css('background', '#fff');
        jQuery(this).find('.icon-bar').css('background', '#00afe0');
    });
}

function initCustomScript(){
    if (navigator.userAgent.match(/IEMobile\/10\.0/)) {
        var msViewportStyle = document.createElement("style");
        msViewportStyle.appendChild(
            document.createTextNode(
                "@-ms-viewport{width:auto!important}"
            )
        );
        document.getElementsByTagName("head")[0].
            appendChild(msViewportStyle);
    }
}

// content tabs init
function initTabs() {
    jQuery('.tab-holder .tab-list').contentTabs({
        addToParent: true,
        autoHeight: true,
        tabLinks: 'a',
        event: 'mouseenter'
    });
    jQuery('.product-tabs').contentTabs({
        addToParent: true,
        autoHeight: true,
        tabLinks: 'a',
        event: 'click'
    });
}

// fancybox modal popup init
function initLightbox() {
    jQuery('a.lightbox, a[rel*="lightbox"]').each(function(){
        var link = jQuery(this);
        if(link.data('initLightbox')) return;
        link.data('initLightbox',true);
        link.fancybox({
            padding: 0,
            margin: 20,
            cyclic: false,
            autoScale: true,
            overlayShow: true,
            overlayOpacity: 0.65,
            overlayColor: '#000000',
            titlePosition: 'inside',
            onComplete: function(box) {
                if(link.attr('href').indexOf('#') === 0) {
                    jQuery('#fancybox-content').find('a.close').unbind('click.fb').bind('click.fb', function(e){
                        jQuery.fancybox.close();
                        e.preventDefault();
                    });
                }
            }
        });
    });
}

//Skrollr init - for Scrolling to functionality
var skrollr_init = function (){
/*

    if(typeof jQuery('.homepage-marker')[0] == "undefined"){

        console.log("skrollr_init TRUE")

        var skrollr_instance = skrollr.init({
            forceHeight:false
        });

        skrollr.menu.init(skrollr_instance, {animate:true});

        if (typeof jQuery('#store_select') !== "undefined"){
            jQuery('#store_select').on('change', function() {
               var selected_store = jQuery("#store_select").val();
               var link = document.querySelector('#'+ selected_store + '-link');
                skrollr.menu.click(link);
            });
        }

    } else {
        console.log("skrollr_init FALSE")
    }
*/

}


//ScrollTo 

//cache all hash links
var all_hash_links = jQuery('a[href^="#"]');

function scrollTo_init(){
    if ( typeof (jQuery.scrollTo) !== "undefined" ){

       // if (!(jQuery('#header').hasClass('homepage-marker'))){

            
                //flag; 0: not processed, 1: processed for desktop/tablet, 2: processed for mobile
                var scrollTo_flag = 0;



                try {

                    if (matchMedia('only screen and (max-width: 767px)').matches){
                        if (scrollTo_flag !== 2){

                            all_hash_links.click(function(event) {
                                event.preventDefault();

                                jQuery(window).stop(true).scrollTo(this.hash, {duration:1000, interrupt:true, offset:0});

                                //flag this is processed
                                //flag is set to avoid repeating this process when window scales but remains within the breakpoint
                                scrollTo_flag = 2;
                                //console.log("scrollTo processed to: " + scrollTo_flag);

                            });
                        }

                    } else if(!(jQuery('#header').hasClass('homepage-marker'))) {
                        
                        if (scrollTo_flag !== 1){
                            all_hash_links.click(function(event) {
                                event.preventDefault();

                                jQuery(window).stop(true).scrollTo(this.hash, {duration:1000, interrupt:true, offset:-158});

                                //flag this is processed
                                //flag is set to avoid repeating this process when window scales but remains within the breakpoint
                                scrollTo_flag = 1;
                                //console.log("scrollTo processed to: " + scrollTo_flag);
                            });
                        }
                    } else {
                        if (scrollTo_flag !== 3){
                            all_hash_links.click(function(event) {
                                event.preventDefault();

                                jQuery(window).stop(true).scrollTo(this.hash, {duration:1000, interrupt:true, offset:0});

                                //flag this is processed
                                //flag is set to avoid repeating this process when window scales but remains within the breakpoint
                                scrollTo_flag = 3;
                                //console.log("scrollTo processed to: " + scrollTo_flag);
                            });
                        }                
                    }

                }catch(error){
                    console.log(error);
                }





            //for Store pages with custom drop down
            if (typeof jQuery('#store_select') !== "undefined"){
                jQuery('#store_select').on('change', function() {
                    var selected_store = jQuery("#store_select").val();
                    var link = jQuery('#'+ selected_store + '-link');
                    link.trigger('click');
                });
            }
       // } if statement ends
    }
}


/* Fancybox overlay fix */
jQuery(function(){
    // detect device type
    var isTouchDevice = ('ontouchstart' in window) || window.DocumentTouch && document instanceof DocumentTouch;
    var isWinPhoneDevice = /Windows Phone/.test(navigator.userAgent);

    // create stylesheet
    var styleTag = jQuery('<style>').appendTo('head');
    styleSheet = styleTag.prop('sheet') || styleTag.prop('styleSheet');

    // crossbrowser style handling
    var addCSSRule = function(selector, rules, index) {
        if(styleSheet.insertRule) {
            styleSheet.insertRule(selector + '{' + rules + '}', index);
        } else {
            styleSheet.addRule(selector, rules, index);
        }
    };

    if(isTouchDevice || isWinPhoneDevice) {
        // custom positioning for mobile devices
        setTimeout(function() {
            var page = jQuery('body'),
                fancySideShadows = jQuery('#fancybox-bg-ne, #fancybox-bg-e, #fancybox-bg-se'),
                fancyOverlay = jQuery('#fancybox-overlay'),
                fancyWrap = jQuery('#fancybox-wrap');

            // override position handler
            jQuery.fancybox.center = function() {
                if(fancyWrap.innerWidth() > fancyOverlay.innerWidth()) {
                    fancyWrap.css({padding: 0});
                    fancySideShadows.css({display: 'none'});
                } else {
                    fancyWrap.css({padding: ''});
                    fancySideShadows.css({display: ''});
                }
                fancyWrap.css({
                    left: (page.innerWidth() - fancyWrap.innerWidth()) / 2
                });
            };
            jQuery(window).on('resize orientationchange', function() {
                jQuery.fancybox.center();
            });
        }, 1);
    } else {
        // use position fixed for desktop
        addCSSRule('#fancybox-overlay', 'position:fixed;top:0;left:0');
    }
});

// stretch background to fill blocks
function initBackgroundResize() {
    jQuery('.bg-stretch').each(function() {
        ImageStretcher.add({
            container: this,
            image: 'img'
        });
    });
}

// align blocks height
function initSameHeight() {
    jQuery('.model-selector .carousel-pagination').sameHeight({
        elements: 'li',
        flexible: true,
        multiLine: true,
        biggestHeight: true
    });
    jQuery('.model-selector .carousel-pagination').sameHeight({
        elements: '.img-wrap',
        flexible: true,
        multiLine: true,
        biggestHeight: true
    });
    jQuery('.products-list .holder').sameHeight({
        elements: '.img-wrap, .description-wrap',
        flexible: true,
        multiLine: true,
        biggestHeight: true
    });
    jQuery('.table-row').sameHeight({
        elements: '.block',
        flexible: true,
        multiLine: true,
        biggestHeight: true
    });
    jQuery('.table-head').sameHeight({
        elements: '.holder',
        flexible: true,
        multiLine: true,
        biggestHeight: true
    });
    jQuery('.same-height').sameHeight({
        elements: '.common-height',
        flexible: true,
        multiLine: true,
        biggestHeight: true
    });
    jQuery('.same-height1').sameHeight({
        elements: '.common-height1',
        flexible: true,
        multiLine: true,
        biggestHeight: true
    });
    jQuery('.safety-slide').sameHeight({
        elements: '.slide-container',
        flexible: true,
        multiLine: true,
        biggestHeight: true
    });
}

// add classes on hover/touch
function initCustomHover() {
    jQuery('.add-nav .search a').touchHover();
}


// Header shadow: check scroll pos for header shadow
// author: Mizanur
//=======================================================


function header_shadow_init(){
    var $win = jQuery(window);
    try{
        if (!(matchMedia('only screen and (max-width: 767px)').matches)){
            $win.scroll(function () {
            if ($win.scrollTop() <= 0){
              jQuery('.header-holder').removeClass('header-shadow');
            }
            else if ( !(jQuery('.header-shadow').length) ) {
               jQuery('.header-holder').addClass('header-shadow');
            }
            })
        }  

    }catch(error){
        console.log(error);
    }
  
}




