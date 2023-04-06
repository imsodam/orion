(function ($) {
    var deviceSize = 1024;
    function scrollOX(status) {
        $('html').css({
            overflowY: status
        })
        return $('html').width()
    };

    var scX = scrollOX('hidden');
    var scO = scrollOX('scroll');
    var scD = scX - scO;

    if (scD > 0) {
        deviceSize = deviceSize - scD
    }

    var ww = $(window).width()
    if (ww > deviceSize) {
        $('html').addClass('pc')
    } else {
        $('html').addClass('mobile')
    }

    //resize event
    $(window).on('resize', function () {
        let ww = $(window).width()
        if (ww > deviceSize && !$('html').hasClass('pc')) {
            $('html').addClass('pc').removeClass('mobile')
            // $('html').animate({ scrollTop: 0 }, 300)
            location.reload()
        } else if (ww <= deviceSize && !$('html').hasClass('mobile')) {
            $('html').addClass('mobile').removeClass('pc')
            // $('html').animate({ scrollTop: 0 }, 300)
            location.reload()
        }
    })

    $(window).on('load', function () {

        $('html').animate({
            scrollTop: 0
        }, 100)

        let imgh = ($('.slide .img').height() / 2) - 35
        $('.article1 .slick-arrow').css({
            top: '0%',
            transform: `translateY(${imgh}px)`,
        })

        let objString = localStorage.getItem('objkey')
        if (objString) {
            const obj = JSON.parse(objString)
            if (Date.now() > obj.expire) {
                $('.popup').addClass('on')
                localStorage.removeItem('objkey')
            } else {
                $('.popup').removeClass('on')
            }
        } else {
            $('.popup').addClass('on')
        }
    })


    //pc 네비게이션 액션
    $('#headerArea #nav .depth1').hover(
        function () {
            if ($('html').hasClass('pc')) {
                $(this).find('.depth2').stop().slideDown()
                $('#headerArea').addClass('on')
                $('#headerArea').css('height', '300px')
            }
        },
        function () {
            if ($('html').hasClass('pc')) {
                $(this).find('.depth2').stop().slideUp()
                $('#headerArea').removeClass('on')
            }
        }
    )
    
    // 헤더 scroll
    $(window).scroll(function () {
        var num = $(this).scrollTop();
        if (num > 10) {
            $("#headerArea").addClass("on");
            $('#headerArea').css('height', '100px')
        } else {
            $("#headerArea").removeClass("on");
        }
    });
    
    // mobile 햄버거메뉴
    $('#headerArea .open').on('click', function () {
        $(this).addClass('on')
        $(this).next().addClass('on')
        $('#headerArea .close').addClass('on')
    });
    $('#headerArea .close').on('click', function () {
        $(this).prev().removeClass('on')
        $(this).removeClass('on')
        $('#headerArea .open').removeClass('on')
        $('#headerArea .depth1 .depth2').slideUp()
        $(this).prev().find('i').removeClass('fa-chevron-up').addClass('fa-chevron-down').css('color', '#06283D')
        $(this).prev().find('h3 a').css('color', '#06283D')
    });

    //mobile nav
    $('#nav .depth1 > li > button').on('click', function () {
        if ($(this).find('i').hasClass('fa-chevron-down')) {
            $(this).next().stop().slideDown()
            $(this).find('i').removeClass('fa-chevron-down')
                .addClass('fa-chevron-up').css('color', '#D2001A')
            $(this).siblings('h3').children('a').css('color', '#D2001A')
        } else {
            $(this).next().stop().slideUp()
            $(this).find('i').removeClass('fa-chevron-up')
                .addClass('fa-chevron-down').css('color', '#06283D')
            $(this).siblings('h3').children('a').css('color', '#06283D')
        }
        $(this).parent().siblings().find('.depth2').slideUp()
            .siblings('h3').children('a').css('color', '#06283D')
        $(this).parent().siblings().find('i').removeClass('fa-chevron-up').addClass('fa-chevron-down').css('color', '#06283D')

        return false;
    });

    //family-site toggle
    $('.fam').on('click', function (e) {
        e.stopPropagation()
        $(this).addClass('active')
        $(this).find('ul').slideToggle()
        $(this).parent().toggleClass('on')
    });

    $('#footerArea').on('click', function () {
        $('#footerArea .fam ul').slideUp();
        $('#footerArea .family').addClass('on');
    });

    //top
    $(window).scroll(function () {
        let sct = $(this).scrollTop()
        if (sct > 100) {
            $('#gotop').fadeIn(300)
        } else {
            $('#gotop').fadeOut(300)
        }
    })

    $('#gotop a').on('click', function () {
        $('html').animate({
            scrollTop: '0'
        }, 500)
        return false
    })

    // popup
    $('.close button').on('click', function () {
        if ($(this).prev().prop('checked')) {
            let tts = Date.now() + (100000)
            //let tts = Date.now()+(24*60*60*1000)   // 하루동안 팝업안열리게
            const obj = {
                check: 'yes',
                expire: tts
            }
            localStorage.setItem('objkey', JSON.stringify(obj))
        }
        $('.popup').removeClass('on')
    })

    // 검색
    $('.top_menu button').on('click', function () {
        $('.inner .product_search').addClass('on')
        $('.search_close').addClass('on')
    })

    $('.search_close').on('click', function () {
        $('.inner .product_search').removeClass('on')
        $('.search_close').removeClass('on')
    })
})(jQuery)
