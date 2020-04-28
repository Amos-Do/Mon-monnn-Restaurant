$(document).ready(function () {

    // fixed header
    $(window).scroll(function () { 
        var scrollTop = $(window).scrollTop();
        console.log($(window).scrollTop());
        if (scrollTop > 350) {
            $('.headerTop').addClass('headerFixed');
        } else {
            $('.headerTop').removeClass('headerFixed');
        }
    });

    // header menu
    $('.showmenu').on('click', function (e) {
        e.preventDefault();
        $('.headerTop').toggleClass('show-menu');
        $(this).find('.fa').toggleClass('fa-bars fa-minus');
    });

    // heart btn
    $('.heart').click(function (e) { 
        e.preventDefault();
        var target = e.target;
        $(target).toggleClass('fa-heart heartPink');
        $(target).toggleClass('fa-heart-o');
    });

    //shop-menu hold
    $('.shop-menu li').click(function (e) { 
        e.preventDefault();
        $(this).find('a').addClass('hold');
        $(this).siblings().find('a').removeClass('hold');
    });

    //product btn-hold
    $('.product button').click(function (e) { 
        e.preventDefault();
        $(this).toggleClass('btn-hold');
    });

});