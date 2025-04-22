// Screen width check
if (window.innerWidth < 1200) {
  AOS.init({
    disable: true
  });
} else {
  AOS.init(); // normal for desktop
}
// ---------- counter plgin part start ----------
$('.counter').counterUp({
    delay: 50,
    time: 3000
});
// ---------- counter plgin part end ----------
//  ------- responsive slider --------

// ---------- slick slider start -----------
$('.slider-for').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    asNavFor: '.slider-nav'
  });
  $('.slider-nav').slick({
    slidesToShow: 4,
    slidesToScroll: 4,
    asNavFor: '.slider-for',
    dots: false,
    centerMode: true,
    focusOnSelect: true,
    arrows:false,
  });
// ---------------- slick slider part 2 ---------
$('.reviewPart').slick({
  infinite: true,
  slidesToShow: 3,
  slidesToScroll: 1,
  arrows:true,
  prevArrow:'<i class="fa-solid arr rr fa-arrow-left"></i>',
  nextArrow:'<i class="fa-solid arr lr fa-arrow-right"></i>',
  responsive: [
    {
      breakpoint: 575,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        dots: false
      }
    },
    {
      breakpoint: 767,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 991,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
  
});

