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

    $(".has-submenu > a").on('click', function (e) {

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

    $(window).resize(function () {
        resizeClassAdd();
    });

    resizeClassAdd();

/*-------------------------------------
  Video Popup
  -------------------------------------*/
  var yPopup = $(".popup-youtube");
  if (yPopup.length) {
    yPopup.magnificPopup({
      disableOn: 700,
      type: 'iframe',
      mainClass: 'mfp-fade',
      removalDelay: 160,
      preloader: false,
      fixedContentPos: false
    });
  }

    /*-------------------------------------
    Carousel slider initiation
    -------------------------------------*/
    $(".rc-carousel").each(function () {
        var carousel = $(this),
            loop = carousel.data("loop"),
            Canimate = carousel.data("animate"),
            items = carousel.data("items"),
            margin = carousel.data("margin"),
            stagePadding = carousel.data("stage-padding"),
            autoplay = carousel.data("autoplay"),
            autoplayTimeout = carousel.data("autoplay-timeout"),
            smartSpeed = carousel.data("smart-speed"),
            dots = carousel.data("dots"),
            nav = carousel.data("nav"),
            navSpeed = carousel.data("nav-speed"),
            rXsmall = carousel.data("r-x-small"),
            rXsmallNav = carousel.data("r-x-small-nav"),
            rXsmallDots = carousel.data("r-x-small-dots"),
            rXmedium = carousel.data("r-x-medium"),
            rXmediumNav = carousel.data("r-x-medium-nav"),
            rXmediumDots = carousel.data("r-x-medium-dots"),
            rSmall = carousel.data("r-small"),
            rSmallNav = carousel.data("r-small-nav"),
            rSmallDots = carousel.data("r-small-dots"),
            rMedium = carousel.data("r-medium"),
            rMediumNav = carousel.data("r-medium-nav"),
            rMediumDots = carousel.data("r-medium-dots"),
            rLarge = carousel.data("r-large"),
            rLargeNav = carousel.data("r-large-nav"),
            rLargeDots = carousel.data("r-large-dots"),
            rExtraLarge = carousel.data("r-extra-large"),
            rExtraLargeNav = carousel.data("r-extra-large-nav"),
            rExtraLargeDots = carousel.data("r-extra-large-dots"),
            center = carousel.data("center"),
            custom_nav = carousel.data("custom-nav") || "";
        carousel.addClass('owl-carousel');
        var owl = carousel.owlCarousel({
            loop: loop ? true : false,
            animateOut: Canimate,
            items: items ? items : 1,
            lazyLoad: true,
            margin: margin ? margin : 0,
            autoplay: autoplay ? true : false,
            autoplayTimeout: autoplayTimeout ? autoplayTimeout : 1000,
            smartSpeed: smartSpeed ? smartSpeed : 250,
            dots: dots ? true : false,
            nav: nav ? true : false,
            navText: [
                '<i class="fa-solid fa-angle-left" aria-hidden="true"></i>',
                '<i class="fa-solid fa-angle-right" aria-hidden="true"></i>'
            ],
            navSpeed: navSpeed ? true : false,
            center: center ? true : false,
            responsiveClass: true,
            responsive: {
                0: {
                    items: rXsmall ? rXsmall : 1,
                    nav: rXsmallNav ? true : false,
                    dots: rXsmallDots ? true : false
                },
                576: {
                    items: rXmedium ? rXmedium : 2,
                    nav: rXmediumNav ? true : false,
                    dots: rXmediumDots ? true : false
                },
                768: {
                    items: rSmall ? rSmall : 3,
                    nav: rSmallNav ? true : false,
                    dots: rSmallDots ? true : false
                },
                992: {
                    items: rMedium ? rMedium : 4,
                    nav: rMediumNav ? true : false,
                    dots: rMediumDots ? true : false
                },
                1200: {
                    items: rLarge ? rLarge : 5,
                    nav: rLargeNav ? true : false,
                    dots: rLargeDots ? true : false
                },
                1240: {
                    items: rExtraLarge ? rExtraLarge : 5,
                    nav: rExtraLargeNav ? true : false,
                    dots: rExtraLargeDots ? true : false
                }
            },
        });

        if (custom_nav) {
            var nav = $(custom_nav),
                nav_next = $(".rt-next", nav),
                nav_prev = $(".rt-prev", nav);

            nav_next.on("click", function (e) {
                e.preventDefault();
                owl.trigger('next.owl.carousel');
                return false;
            });

            nav_prev.on("click", function (e) {
                e.preventDefault();
                owl.trigger('prev.owl.carousel');
                return false;
            });
        }
    });


})(jQuery);