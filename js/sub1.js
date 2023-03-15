$(document).ready(function () {

    $('.tab ul li:eq(0)').addClass('current');

    var tabmove = $('.summary').offset().top + $('.summary').height();

    var history1 = $('.year:eq(0)').offset().top - 280;
    var history2 = $('.year:eq(1)').offset().top - 280;
    var history3 = $('.year:eq(2)').offset().top - 280;
    var history4 = $('.year:eq(3)').offset().top - 280;


    // 스크롤 이벤트
    $(window).on('scroll', function () {

        var scroll = $(window).scrollTop();

        // tab on
        if (scroll > tabmove) {
            $('.tabbox').addClass('on');
            $('#headerArea').hide();
            $('.history_wrap').css('marginTop', 150);
            // 탭 높이만큼 마진
        } else {
            $('.tabbox').removeClass('on');
            $('#headerArea').fadeIn('fast');
            $('.history_wrap').css('marginTop', '');
        }


        // tab
        $('.tab ul li').removeClass('current');
        if (scroll >= 0 && scroll <= history2) {
            $('.tab ul li:eq(0)').addClass('current');
        } else if (scroll > history2 && scroll <= history3) {
            $('.tab ul li:eq(1)').addClass('current');
        } else if (scroll > history3 && scroll <= history4) {
            $('.tab ul li:eq(2)').addClass('current');
        } else if (scroll > history4) {
            $('.tab ul li:eq(3)').addClass('current');
        }


        // 연혁 붙이기
        $('.year').removeClass('active');
        if (scroll > tabmove + 184 && scroll < history2 - 10) {
            $('.year:eq(0)').addClass('active');
        } else if (scroll >= history2 - 10 && scroll < history3 - 10) {
            $('.year:eq(1)').addClass('active');
        } else if (scroll >= history3 - 10 && scroll < history4 - 10) {
            $('.year:eq(2)').addClass('active');
        } else if (scroll > history4) {
            $('.year:eq(3)').addClass('active');
        } else {
            //$('.year').removeClass('current');
        }

    });


    // tab click, scroll move
    $('.tab li a').click(function (e) {
        e.preventDefault();

        var ind = $(this).index('.tab li a');
        var value = $('.history_wrap .year:eq(' + ind + ')').offset().top - 100;

        // value의 위치로 움직여라
        $("html,body").stop().animate({ "scrollTop": value }, 500);
    });

});