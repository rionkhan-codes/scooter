AOS.init();
// ---------- counter plgin part start ----------
$('.counter').counterUp({
    delay: 50,
    time: 3000
});
// ---------- counter plgin part end ----------
// ------------ slick slider part start -----------
$('.slider-for').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    asNavFor: '.slider-nav'
  });
  $('.slider-nav').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    asNavFor: '.slider-for',
    dots: true,
    centerMode: true,
    focusOnSelect: true
  });
// ------------ slick slider part end -----------