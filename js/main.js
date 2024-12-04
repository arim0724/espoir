//mgnb

$(".ham").click(function () {
  $(".mgnb_wrap").animate({
    left: 0
  });
});

$(".mgnb_close").click(function () {
  $(".mgnb_wrap").animate({
    left: "100%"
  });
});


$(".mgnb > li").click(function () {
  $(this).find(".mdepth2").stop().slideToggle();
  $(this).siblings().find(".mdepth2").slideUp();
});




//2차메뉴
$(".gnb > li").hover(function () {
  $(this).find(".depth2").stop().slideToggle();
});

//슬라이드
const banner_list = new Swiper('.banner_list', {
  /* autoplay: {
  delay: 3000,
  disableOnInteraction: false,
}, */
  loop: true, //기본값은 false 슬라이드 반복
  navigation: {
    nextEl: ".swiper-button-next",//다음
    prevEl: ".swiper-button-prev",//이전
  }, /* 노션에 정리해두면 좋아  */
  pagination: {
    el: ".swiper-pagination",
    type: "progressbar",
  },
});

const prd_list = new Swiper('.prd_list', {
  centeredSlides: true,
  loop: true,
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
  speed: 1000,


  breakpoints: {
    0: {
      slidesPerView: 1.5,
      spaceBetween: 40

    },
    768: {
      slidesPerView: 2.5,
      spaceBetween: 30
    },
    1024: {
      slidesPerView: 4,
      spaceBetween: 25
    },
  },
});

