$(".slider-main_component").each(function (index) {
  const swiper = new Swiper($(this).find(".swiper")[0], {
    slidesPerView: 1,
    speed: 700,
    keyboard: true,
    mousewheel: {
      forceToAxis: true
    },
    freeMode: true,
    slideToClickedSlide: true,
    spaceBetween: "5%"
    breakpoints: {
      // mobile landscape
      480: {
        slidesPerView: 1,
        spaceBetween: "4%"
      },
      // tablet
      768: {
        slidesPerView: 2,
        spaceBetween: "3%"
      },
      // desktop
      992: {
        slidesPerView: 3,
        spaceBetween: "2%"
      }
  },
  pagination: {
    el: $(this).find(".swiper-bullet-wrapper")[0],
    bulletActiveClass: "is-active",
    bulletClass: "swiper-bullet",
    bulletElement: "button",
    clickable: true
  },
  scrollbar: {
    el: $(this).find(".swiper-drag-wrapper")[0],
    draggable: true,
    dragClass: "swiper-drag",
    snapOnRelease: true
  }
  });
});
