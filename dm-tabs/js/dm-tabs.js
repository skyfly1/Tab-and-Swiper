/*
 * dm-tabs.js v1.1
 *
 * Самый лёгкий и быстрый плагин jQuery для
 * создания вкладк(табов)
 *
 * (c) 2014 @dobrovoi http://dbmast.ru
 */

(function(s) {
    var n;
    s(".tabs").on("click", "li:not(.active)", function() {
        n = s(this).parents(".tabs_block"), s(this).dmtabs(n)
    }), s.fn.dmtabs = function(n) {
        s(this).addClass("active").siblings().removeClass("active"), n.find(".box").eq(s(this).index()).show(1, function() {
            s(this).addClass("open_tab")
        }).siblings(".box").hide(1, function() {
            s(this).removeClass("open_tab")
        })
    }
})(jQuery);

 var swiper = new Swiper('.s1', {
    pagination: '.swiper-pagination',
    nextButton: '.swiper-button-next',
    prevButton: '.swiper-button-prev',
    slidesPerView: 1,
    paginationClickable: true,
    spaceBetween: 30,
    loop: true,
    autoplay: 1000,
    autoplayDisableOnInteraction: false
    });

  var swiper1 = new Swiper('.s2', {
    pagination: '.swiper-pagination',
    nextButton: '.swiper-button-next',
    prevButton: '.swiper-button-prev',
    slidesPerView: 1,
    paginationClickable: true,
    spaceBetween: 30,
    loop: true,
    autoplay: 1000,
    autoplayDisableOnInteraction: false
    });