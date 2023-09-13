$(".slider-main_component").each(function (index) {
  const swiper = new Swiper($(this).find(".swiper")[0], {
    slidesPerView: "auto",
    speed: 700,
    keyboard: true,
    mousewheel: true,
  });
});
