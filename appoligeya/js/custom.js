$(document).ready(function () {
    $('.portf-slider').slick({
        infinite: true,
        slidesToShow: 2,
        slidesToScroll: 1,
        nextArrow: $('.nextArrow'),
        prevArrow: $('.prevArrow'),
        responsive: [
            {
                breakpoint: 1000,
                settings:{
                    slidesToShow: 1,
                    slidesToscroll: 1,
                    arrows: false,
                    centerMode: true,
                    variableWidth: true,
                    focusOnSelect: true
                }
            }
        ]
    });

    $('a[href^="#"]').click(function(){
//Сохраняем значение атрибута href в переменной:
        var target = $(this).attr('href');
        $('html, body').animate({scrollTop: $(target).offset().top}, 800);
        return false;
    });

    $(document).scroll(function () {
        s_top = $("body").scrollTop();
        service = $("#services").offset().top;
        if(s_top > service - 50){
            $('nav').addClass('dark-navbar');
            if (!$('nav').hasClass('active-nav')){
                $('.tablet-nav').addClass('dark-nav');
            }
        }
        else {
            $('nav').removeClass('dark-navbar');
            $('.tablet-nav').removeClass('dark-nav');
        }
    });

    s_top = $("body").scrollTop();
    yes = $("#services").offset().top;
    if(s_top > yes - 50){
        $('nav').addClass('dark-navbar');
    }

    setTimeout(function () {
        $('.loading').hide();
    }, 1000);

    $('.tablet-nav').on('click', function () {
        $('nav').toggleClass('active-nav');
        $('nav').toggle("slide",'left');

        if ($('nav').hasClass('active-nav')){
            $('.tablet-nav').removeClass('dark-nav');
        }
    });

    $('.nav-item a').on('click', function () {
        if (window.screen.availWidth < 789){
            $('nav').toggle("slide");
            $('nav').toggleClass('active-nav');
        }
    });

    $('#modal-image').on('click', function (e) {
        if (!$(e.target).hasClass('image-container') && !$(e.target).hasClass('modal-img')){
            $('#modal-image').hide();
        }
    });

    $(document).keyup(function(e) {
        if (e.keyCode == 27) {
            $('#modal-image').hide();
        }
    });

    $('.portf-slider img').on('click', function () {
        var src = $(this).attr('src');
        $('.modal-img').attr('src', src);
        $('#modal-image').show();
    });

});