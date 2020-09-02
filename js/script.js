"use strict";

///////////  MAIN PAGE ///////////

setTimeout(function () {
    $('main').addClass('main-visible');
}, 200);

/////////////////    MENU     ////////////////
function openNav() {
    document.getElementById("top-menu").style.width = "300px";
}

function closeNav() {
    document.getElementById("top-menu").style.width = "0";
}


///////////////////      SLIDERS        /////////////////////

$(function () {
    $(".main-slider").slick({
        slidesToShow: 1,
        speed: 3000,
        slidesToScroll: 1,
        dots: true,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    dots: false,
                },
            },
        ],
    });
});

$(function () {
    $(".controller-slider").slick({
        slidesToShow: 1,
        speed: 3000,
        slidesToScroll: 1,
        dots: true,
        vertical: false,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    dots: false,
                },
            },
        ],

    });
});


$(function () {
    $(".about-slider").slick({
        slidesToShow: 1,
        speed: 3000,
        slidesToScroll: 1,
        dots: true,
        vertical: false,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    dots: false,
                },
            },
        ],
    });
});


////////////////////   MOBILE        //////////////////
if ($(window).width() < 567) {
    $('div').removeClass('main-slider about-slider controller-slider');
};

//////////////////////////////////
