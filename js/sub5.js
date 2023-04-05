// sub5_3
(function ($) {

    $('.page_num .num1').on('click', function () {
        $(this).addClass('active')
    })

    $('.page_num .num2').on('click', function () {
        $(this).siblings().removeClass('active')
        $(this).addClass('active')
    })

    $('.page_num .num3').on('click', function () {
        $(this).siblings().removeClass('active')
        $(this).addClass('active')
    })

})(jQuery)