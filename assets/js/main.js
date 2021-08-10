/*jslint browser: true*/
/*global $, jQuery ,AOS*/

(function ($) {

    "use strict";

    var $window = $(window),
        $body = $('body'),
        $foxappMenu = $('.foxapp-header'),
        $countUp = $('.fact-box h5'),
        $otherFeaturesSlider = $('.other-features-slider'),
        $screenshotsSlider = $('.screenshots-slider'),
        $testimonialSslider = $('.testimonial-slider'),
        $teamSlider = $('.team-slider'),
        $logosSlider = $('.logos-slider'),
        $recentNewsSlider = $('.recent-news-slider');


    /*START PRELOADER JS & REFRESH AOS*/
    $window.on('load', function () {
        $('.preloader').delay(350).fadeOut('slow');
        AOS.refresh();
    });
    /*END PRELOADER JS & REFRESH AOS*/


    $(document).ready(function () {

        $('.themes-colors span').on('click', function () {
            $('.themes-colors').toggleClass('open');
        });

        $('.themes-colors ul li a').on('click', function () {
            var styleSrc = $(this).attr("data-style");
            $('.themes-colors ul li').removeClass('active');
            $('#themes_colors').attr("href", "assets/css/" + styleSrc + ".css");
            $(this).parent().toggleClass('active');
        });

        /*START AOS JS*/
        AOS.init({
            disable: 'mobile',
            once: true,
            duration: 600
        });
        /*END AOS JS*/

        /*START SCROLL SPY JS*/
        $body.scrollspy({
            target: '#main_menu',
        });
        /*END SCROLL SPY JS*/

        /*START MENU JS*/
        $('a.anchor').on('click', function (e) {
            var anchor = $(this);
            var ancAtt = $(anchor.attr('href'));
            $('html, body').stop().animate({
                scrollTop: ancAtt.offset().top
            }, 1000);
            e.preventDefault();
        });

        $window.scroll(function () {
            var currentLink = $(this);
            if ($(currentLink).scrollTop() > 500) {
                $foxappMenu.addClass("sticky");
            } else {
                $foxappMenu.removeClass("sticky");
            }
        });
        /*END MENU JS*/

        // Custom slider with buttons
        var slickOpts = {
            slidesToShow: 1,
            slidesToScroll: 1,
            //centerMode: true,
            easing: 'swing', // see http://api.jquery.com/animate/
            speed: 700,
            dots: true,
            customPaging: function (slick, index) {
                return '<a>' + (index + 1) + '</a>';
            }
        };
        // Init slick carousel
        $('#carousel').slick(slickOpts);

        /*START OTHER FEATURES SLIDER JS*/
        if ($otherFeaturesSlider.length > 0) {
            $otherFeaturesSlider.slick({
                centerMode: true,
                centerPadding: '150px',
                slidesToShow: 3,
                infinite: false,
                focusOnSelect: true,
                arrows: false,
                responsive: [{
                    breakpoint: 1200,
                    settings: {
                    }
                },
                {
                    breakpoint: 769,
                    settings: {
                        slidesToShow: 1,
                        centerPadding: '0',
                    }
                },
                ]
            });
        }
        /*END OTHER FEATURES SLIDER JS*/

        $('.slider').slick()

        var carousel = function () {
            $(".owl-carousel").owlCarousel({
                loop: true,
                margin: 10,
                nav: true,
                stagePadding: 5,
                nav: false,
                navText: [
                    '<span class="icon-chevron-left">',
                    '<span class="icon-chevron-right">',
                ],
                responsive: {
                    0: {
                        items: 1,
                    },
                    600: {
                        items: 2,
                    },
                    1000: {
                        items: 3,
                    },
                },
            });
        };
        carousel();

        /*START SCREENSHOTS SLIDER JS*/
        if ($('.photo-slider').length > 0) {
            $('.photo-slider').slick({
                centerMode: true,
                centerPadding: '150px',
                slidesToShow: 1,
                focusOnSelect: true,
                arrows: true,

            });
        }
        /*END SCREENSHOTS SLIDER JS*/
        /*START SCREENSHOTS SLIDER JS*/
        if ($screenshotsSlider.length > 0) {
            $screenshotsSlider.slick({
                centerMode: true,
                centerPadding: '150px',
                slidesToShow: 3,
                infinite: false,
                focusOnSelect: true,
                arrows: false,
                responsive: [{
                    breakpoint: 1200,
                    settings: {
                    }
                },
                {
                    breakpoint: 769,
                    settings: {
                        slidesToShow: 1,
                        centerPadding: '0',
                    }
                },
                ]
            });
        }
        /*END SCREENSHOTS SLIDER JS*/

        /*START TESTIMONIAL SLIDER JS*/
        if ($testimonialSslider.length > 0) {
            $testimonialSslider.slick({
                centerPadding: '150px',
                slidesToShow: 2,
                slidesToScroll: 2,
                dots: true,
                infinite: false,
                arrows: false,
                responsive: [{
                    breakpoint: 1200,
                    settings: {
                    }
                },
                {
                    breakpoint: 769,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                    }
                },
                ]
            });
        }
        /*END TESTIMONIAL SLIDER JS*/

        /*START COUNTUP JS*/
        $countUp.counterUp({
            delay: 10,
            time: 2000
        });
        /*END COUNTUP JS*/

        /*START TEAM SLIDER JS*/
        if ($teamSlider.length > 0) {
            $teamSlider.slick({
                slidesToShow: 4,
                slidesToScroll: 1,
                dots: true,
                infinite: false,
                arrows: false,
                responsive: [{
                    breakpoint: 1200,
                    settings: {
                    }
                },
                {
                    breakpoint: 769,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                    }
                },
                ]
            });
        }
        /*END TEAM SLIDER JS*/

        /*START LOGOS SLIDER JS*/
        if ($logosSlider.length > 0) {
            $logosSlider.slick({
                slidesToShow: 6,
                slidesToScroll: 1,
                dots: false,
                infinite: false,
                arrows: true,
                responsive: [{
                    breakpoint: 1200,
                    settings: {
                    }
                },
                {
                    breakpoint: 769,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                    }
                },
                ]
            });
        }
        /*END LOGOS SLIDER JS*/

        /*START RECENT NEWS SLIDER JS*/
        if ($recentNewsSlider.length > 0) {
            $recentNewsSlider.slick({
                slidesToShow: 1,
                slidesToScroll: 1,
                dots: true,
                infinite: false,
                arrows: false,
                responsive: [{
                    breakpoint: 1200,
                    settings: {
                    }
                },
                {
                    breakpoint: 769,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                    }
                },
                ]
            });
        }
        /*END RECENT NEWS SLIDER JS*/


        $('.show-btn').on('click', () => {
            $('.show-btn').addClass('btn-hidden');
            $('.hide-btn').removeClass('btn-hidden');
            $('.hidden-faqs').css('display', 'block');
        })

        $('.hide-btn').on('click', () => {
            $('.hidden-faqs').css('display', 'none');
            $('.hide-btn').addClass('btn-hidden');
            $('.show-btn').removeClass('btn-hidden');
        })

    });

}(jQuery));