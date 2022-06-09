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
        
    $(".has-submenu > a").on('click', function(e) {

        var targetParent = $(this).parents(".mainmenu-nav");
        var target = $(this).siblings(".submenu");

        if (targetParent.hasClass('offcanvas')) {
            $(target).slideToggle(400);
            $(this).parent(".has-submenu").toggleClass('open');
        }

    });

    // Mobile Sidemenu Class Add
    function resizeClassAdd() {
        if (window.matchMedia('(max-width: 991px)').matches) {
            $('.mainmenu-nav').addClass('offcanvas offcanvas-start');
        } else {
            $('.mainmenu-nav').removeClass('offcanvas offcanvas-start');
            $('.mainmenu-nav').removeAttr('style');
        }
    }

    $(window).resize(function() {
        resizeClassAdd();
    });

    resizeClassAdd();
    
   
})(jQuery);