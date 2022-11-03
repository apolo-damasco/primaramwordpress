AOS.init({
    duration: 800,
    easing: 'ease-out'
});

$('.home__bloque2__slider').slick({
    dots: true,
    arrows: false,
    infinite: true,
    speed: 500,
    fade: true,
    cssEase: 'linear',

});
$('.home__bloque5_datos').slick({
    dots: true,
    arrows: false,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 4,
    autoplay: true,
    autoplaySpeed: 4000,
    responsive: [
        {
            breakpoint: 600,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2
            }
        }
    ]
});
$('.ficha__proyecto__slider').slick({
    dots: true,
    arrows: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1
});
$('.galeria__producto').slick({
    dots: true,
    arrows: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1
});
$('.cabecera__slider').slick({
    dots: true,
    arrows: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1
});

if ($("body").width() < 600) {
    $('.home__bloque3_contenido .row').slick({
        dots: true,
        arrows: false,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1
    });

    $("header .header__menu ul li.menu-item-has-children > a").click(function () {
        $(this).parent("li").toggleClass("active");
        $(this).parent("li").children("ul").slideToggle();
        return false;
    });

}


$(document).ready(function () {
    $(".tab_content").hide();
    $(".tab_content:first").show();

    $(".btn_menu_movil").click(function () {
        $("header .header__menu").fadeToggle();
		$("body").toggleClass("activeMenu")
        return false;
    })

    $("ul.tabs li").click(function () {
        $("ul.tabs li").removeClass("active");
        $(this).addClass("active");
        $(".tab_content").hide();
        var activeTab = $(this).attr("rel");
        $("#" + activeTab).fadeIn();
    });

    $(".btn_up_top").click(function () {
        $("html, body").animate({scrollTop: 0}, 600);
        return false;
    })
});