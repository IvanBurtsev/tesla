$(function(){
    $('.slider').slick({
        arrows: false,
        autoplay: 2000,
        dots: true,
        fade: true,
        dotsClass: 'dots-slide'

    });

    $('.header-btn').on('click', function(){
        $('.menu').addClass('active');
    });

    $('.close-btn').on('click', function(){
        $('.menu').removeClass('active')
    });
});