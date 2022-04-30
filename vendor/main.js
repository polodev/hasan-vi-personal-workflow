(function ($) {
    "use strict";

    /*-------------------------------------
    Isotope
    -------------------------------------*/
    $('#service-navigation').onePageNav({
        currentClass: 'current',
        changeHash: false,
        scrollSpeed: 500,
        scrollThreshold: .5,
        filter: '',
        easing: 'swing',
        
    });


    /*-------------------------------------
    Isotope
    -------------------------------------*/
    $('.isotope-wrapper').imagesLoaded(function () {
        // filter items on button click
        $('.isotope-button').on('click', 'button', function () {
            var filterValue = $(this).attr('data-filter');
            $grid.isotope({
                filter: filterValue
            });
        });
        
        // init Isotope
        var $grid = $('.isotope-list').isotope({
            itemSelector: '.services',
            percentPosition: true,
            transitionDuration: '0.7s',
            layoutMode: 'fitRows',
            masonry: {
                // use outer width of grid-sizer for columnWidth
                columnWidth: 1,
            }
        });
    });

    $('.isotope-button button').on('click', function (event) {
        $(this).siblings('.active').removeClass('active');
        $(this).addClass('active');
        event.preventDefault();
    });
   
})(jQuery);