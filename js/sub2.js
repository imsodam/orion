// sub2_1

$(document).ready(function () {

    $('.tab ul li:eq(0)').addClass('current');
    $('.cont:eq(0)').show();


    $('.tab ul a').on('click', function (e) {
        e.preventDefault();

        var ind = $(this).index('.tab ul a');

        $('.tab ul li').removeClass('current');
        $('.tab ul li:eq(' + ind + ')').addClass('current');

        $('.cont').hide();
        $('.cont:eq(' + ind + ')').fadeIn();

    });

});

// sub2_3
let b = $('.area1 dd b').offset().top - $(window).height() / 2

$(window).on('scroll', function () {

    let scroll = $(window).scrollTop();

    if (scroll > b) {
        $('.area1 dd b').addClass('animate__animated animate__fadeInUp');
    } else {
        $('.area1 dd b').removeClass('animate__animated animate__fadeInUp');
    }

});
