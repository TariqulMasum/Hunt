$(function() {

    //banner slider start

    $('.banner-slider-main').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        speed: 1500,
        arrows: true,
        prevArrow: '.left',
        nextArrow: '.right',
        fade: true,

        responsive: [{
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    arrows: false,
                    dots: true,
                }
            },
            {
                breakpoint: 1601,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    arrows: true,
                    prevArrow: '.left',
                    nextArrow: '.right',
                    fade: true,
                }
            },
        ]
    });

    //banner slider end
    //portfolio slider strart

    $('.port-slider-main').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        speed: 1500,
        arrows: false,
        pauseOnHover: false,

        responsive: [{
                breakpoint: 576,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                }
            },
        ]

    });

    //portfolio slider end
    //portfolio venobox start

    $('.venobox').venobox();

    //portfolio venobox end
    //service slider start


    $('.service-slider-main').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 5000,
        speed: 1500,
        vertical: true,
        verticalSwiping: true,
        pauseOnHover: false,
        arrows: true,
        prevArrow: '.top',
        nextArrow: '.bottom',
        pauseOnHover: false,
        centerMode: true,
        centerPadding: "0",

        responsive: [{
            breakpoint: 768,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                verticalSwiping: false,
            }
        }, ]

    });
    //service slider end
    //testimonial slider start

    $('.test-content-main').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        dots: true,
        autoplay: true,
        autoplaySpeed: 5000,
        speed: 1500,
        fade: true,
        asNavFor: '.test-slider-main',

        responsive: [{
            breakpoint: 768,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                dots: false,
                autoplay: true,
                autoplaySpeed: 3000,
                speed: 1500,
            }
        }, ]
    });

    $('.test-slider-main').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [{
            breakpoint: 768,
            settings: {
                vertical: false,
                slidesToShow: 3,
                slidesToScroll: 1,
                verticalSwiping: false,
                arrows: false,
            }
        }],
        asNavFor: '.test-content-main',
        dots: false,
        autoplay: true,
        autoplaySpeed: 5000,
        speed: 1500,
        arrows: false,
        vertical: true,
        verticalSwiping: true,
        centerPadding: '0px',
        centerMode: true,
    });

    //testimonial slider end
    // counter up

    $('.counter').counterUp({
        delay: 10,
        time: 3000
    });

    //team venobox start

    $('.venobox-team').venobox();

    //team venobox end

    //logo slider start

    $('.logo-slider').slick({
        slidesToShow: 5,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        speed: 1500,
        arrows: false,
        pauseOnHover: false,
        centerPadding: '0px',
        centerMode: true,

        responsive: [{
                breakpoint: 400,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                }
            },
        ]

    });

    //logo slider end


    // back-to-top part start

    $(function() {

        $('.back-top').click(function() {
            $('html,body').animate({ scrollTop: 0 }, 1500);
        })
    });

    $(window).scroll(function() {

        var move = $(this).scrollTop();

        if (move > 300) {
            $('.back-top').fadeIn(500);
        } else {
            $('.back-top').fadeOut(500);
        }
    });

    // back-to-top part end

    //stricky menu start

    $(window).scroll(function() {
        var scrolling = $(this).scrollTop();

        if (scrolling > 70) {
            $('.navbar').addClass('bg');
        } else {
            $('.navbar').removeClass('bg');
        }
    });

    //stricky menu end

    // smooth sroll start

    var scrollLink = $('.scroll-link');
    $(scrollLink).on('click', function(event) {
        event.preventDefault();
        $('html,body').animate({ scrollTop: $(this.hash).offset().top - 85 });
    });

    // smooth sroll end

    // Active menu start

    var scrollSpy = new bootstrap.ScrollSpy(document.body, {
        target: '.navbar',
        offset: 100,
    });

    // Active menu end

    //Navar toggler animation start

    $('.navbar-toggler').click(function() {
        $('.navbar-toggler').toggleClass('animation')
    });

    //Navar toggler animation end








});