$('.slide-group').slick({
    autoplay: true,
    autoplaySpeed: 3000,
    dots: true,
    arrows: true,
    pauseOnFocus: false,
    prevArrow: '<button class="slick-arrow slick-prev"><i class="fa-solid fa-angle-left"></i></button>',
    nextArrow: '<button class="slick-arrow slick-next"><i class="fa-solid fa-angle-right"></i></button>',
    responsive: [
        {
            breakpoint: 321,
            settings: {
                arrows: false
            }
        }
    ]
})

$(window).on('resize', function () {

    let imgh = ($('.slide .img').height() / 2) - 35
    $('.article1 .slick-arrow').css({
        top: '0%',
        transform: `translateY(${imgh}px)`,
    })
})

//pause&play
$('.article1 .plpa i').on('click', function () {
    if ($(this).hasClass('fa-pause')) {
        $('.article1 .slide-group').slick('slickPause')
        $(this).removeClass('fa-pause').addClass('fa-play')
    } else {
        $('.article1 .slide-group').slick('slickPlay')
        $(this).removeClass('fa-play').addClass('fa-pause')
    }
})

// 스크롤이벤트가 발생했을 때 (article2, article5)
let article2Near = $('.article2').offset().top - $(window).height() / 2
let article5Near = $('.article5').offset().top - $(window).height() / 2

// let article2Near = $('.article2').offset().top + $('.article2').outerHeight/5;
// let article5Near = $('.article5').offset().top + $('.article5').outerHeight/5;

$(window).on('scroll', function () {
    let sct = $(this).scrollTop()
    // let sct = $(this).scrollTop() + $(this).height();

    if (sct >= article2Near) {
        $('.article2').addClass('on')
    } else {
        $('.article2').removeClass('on')
    }

    if (sct >= article5Near) {
        $('.article5').addClass('on')
    } else {
        $('.article5').removeClass('on')
    }
})

// 스크롤이벤트가 발생했을 때 (article3)
$(window).on('scroll', function () {
    var mainScroll = $(window).scrollTop();
    var mainScrollGap = $(window).height() - 500;

    var article3 = $('.article3').offset().top - mainScrollGap;
    if (mainScroll > article3) {
        $('.article3').addClass('active');
    } else if (mainScroll < article3 - 500) {
        $('.article3').removeClass('active');
    };
})

// article3 button
$(document).ready(function () {

    var busiCount = 3;
    var busiCnt = 1;

    $('.article3 .article3_box ul li:eq(0)').show();
    $('.article3 .article3_img img:eq(0)').show();

    $('.article3 .article3_btn a').click(function (e) {
        e.preventDefault();

        if ($(this).is('.btnPrev')) {
            if (busiCnt == 1) { busiCnt = busiCount + 1; }
            busiCnt--; //카운트 감소  // 1 2 1 2
        } else if ($(this).is('.btnNext')) {
            if (busiCnt == busiCount) { busiCnt = 0; }
            busiCnt++; //카운트 1씩증가
        }

        $('.article3 .article3_box ul li').hide();
        $('.article3 .article3_box ul li:eq(' + (busiCnt - 1) + ')').fadeIn();

        $('.article3 .article3_img img').hide();
        $('.article3 .article3_img img:eq(' + (busiCnt - 1) + ')').fadeIn();

    });
});
