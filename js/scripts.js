/*
    * Sticky Nav 
    * Owl Slider 
    * Smooth Scroll
    * Skills Javascript
    * Isotope
    * Fancybox
    * Function calls
    * Map Scroll Zoom disable
/*

/*


/*
|--------------------------------------------------------------------------
| Sticky Nav 
|--------------------------------------------------------------------------
|
|
*/
$(document).on('scroll', function () {
    $header = $('header');
    if ($(this).scrollTop() > 1) {
        $header.addClass('fixedtop');
    } else {
        $header.removeClass('fixedtop');
    }
});
/*
/*
|--------------------------------------------------------------------------
| Owl Slider 
|--------------------------------------------------------------------------
|
|
*/
function kobeOwl(){
    $("#owl-demo").owlCarousel({

        autoPlay: 3000, //Set AutoPlay to 3 seconds

        items: 5
        , itemsDesktop: [1199, 3]
        , itemsDesktopSmall: [979, 3]



    });

}
/*
|--------------------------------------------------------------------------
| Smooth Scroll 
|--------------------------------------------------------------------------
|
|
|
*/
function smoothScroll(){
    $('a[href*="#"]:not([href="#text-carousel"])').on('click',function () {
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            if (target.length) {
                $('html, body').animate({
                    scrollTop: target.offset().top
                }, 1000);
                return false;
            }
        }
    });
}
/*
|--------------------------------------------------------------------------
| Skills Javascript
|--------------------------------------------------------------------------
|
|
|
*/

    function setSkillBarWidth(){
        var percentage = document.getElementsByClassName("percentage");
        var skillwidth = document.getElementsByClassName("skillwidth");

        for(i = 0; i<percentage.length; i++) {
            skillwidth[i].style.width = percentage[i].innerHTML+"%";
        }

    } 


/*
	|--------------------------------------------------------------------------
	| Global myTemplate Obj / Variable Declaration
	|--------------------------------------------------------------------------
	|
	|
	|
	*/

var mytemplate = window.mytemplate || {}
, $win = $(window);


/*
	|--------------------------------------------------------------------------
	| isotope
	|--------------------------------------------------------------------------
	|
	|
	|
	*/

mytemplate.Isotope = function () {

    // 4 column layout
    var isotopeContainer = $('.isotopeContainer');
    $isotopeFilters = $('.isotopeFilters');
    $isotopeFilters2 = $('.isotopeFilters2');
    $isotopeFilters3 = $('.isotopeFilters3');
    $isotopeFilters4 = $('.isotopeFilters4');
    if (!isotopeContainer.length || !jQuery().isotope) return;
    $win.on('load',function () {
        isotopeContainer.isotope({
            itemSelector: '.isotopeSelector'
        });
        $isotopeFilters.on('click', 'a', function (e) {
            $isotopeFilters.find('.active').removeClass('active');
            $(this).parent().addClass('active');
            var filterValue = $(this).attr('data-filter');
            isotopeContainer.isotope({
                filter: filterValue
            });
            e.preventDefault();
        });
    });

    // 3 column layout
    var isotopeContainer2 = $('.isotopeContainer2');
    if (!isotopeContainer2.length || !jQuery().isotope) return;
    $win.on('load',function () {
        isotopeContainer2.isotope({
            itemSelector: '.isotopeSelector'
        });
        $isotopeFilters2.on('click', 'a', function (e) {
            $isotopeFilters1.find('.active').removeClass('active');
            $(this).parent().addClass('active');
            var filterValue = $(this).attr('data-filter');
            isotopeContainer2.isotope({
                filter: filterValue
            });
            e.preventDefault();
        });
    });

    // 2 column layout
    var isotopeContainer3 = $('.isotopeContainer3');
    if (!isotopeContainer3.length || !jQuery().isotope) return;
    $win.on('load',function () {
        isotopeContainer3.isotope({
            itemSelector: '.isotopeSelector'
        });
        $isotopeFilters3.on('click', 'a', function (e) {
            $isotopeFilters3.find('.active').removeClass('active');
            $(this).parent().addClass('active');
            var filterValue = $(this).attr('data-filter');
            isotopeContainer3.isotope({
                filter: filterValue
            });
            e.preventDefault();
        });
    });

    // 1 column layout
    var isotopeContainer4 = $('.isotopeContainer4');
    if (!isotopeContainer4.length || !jQuery().isotope) return;
    $win.on('load',function () {
        isotopeContainer4.isotope({
            itemSelector: '.isotopeSelector'
        });
        $isotopeFilters4.on('click', 'a', function (e) {
            $isotopeFilters4.find('.active').removeClass('active');
            $(this).parent().addClass('active');
            var filterValue = $(this).attr('data-filter');
            isotopeContainer4.isotope({
                filter: filterValue
            });
            e.preventDefault();
        });
    });

};



/*
	|--------------------------------------------------------------------------
	| Fancybox
	|--------------------------------------------------------------------------
	|
	|
	|
	*/

mytemplate.Fancybox = function () {

    $(".fancybox-pop").fancybox({
        maxWidth: 900
        , maxHeight: 700
        , fitToView: true
        , width: '80%'
        , height: '80%'
        , autoSize: false
        , closeClick: false
        , openEffect: 'elastic'
        , closeEffect: 'none'
    });

};

/*
	|--------------------------------------------------------------------------
	| Function calls
	|--------------------------------------------------------------------------
	|
	|
	|
	*/
$(function(){
    mytemplate.Isotope();
    mytemplate.Fancybox();
    kobeOwl();
    smoothScroll();
    setSkillBarWidth(); 
});

$(window).on("load", function(){
    $(".portfolio-section").css("display", "block");
});

/*
	|--------------------------------------------------------------------------
	| Map Scroll Zoom disable
	|--------------------------------------------------------------------------
	|
	|
	|
	*/
$('.map-container').on('click',function(){
    $iframe = $(this).find('iframe');
    $iframe.addClass('clicked')})
    .mouseleave(function(){
    $iframe.removeClass('clicked')
});


