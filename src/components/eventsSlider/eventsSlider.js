const eventsSliders = document.querySelectorAll(".eventsSlider");

eventsSliders.forEach((slider) => {
  new Swiper(slider, {
    slidesPerView: 5,
    spaceBetween: 0,
    loop: true,
    spaceBetween: 12,
    navigation: {
      nextEl: slider.querySelector(".next"),
      prevEl: slider.querySelector(".prev"),
    },
    breakpoints: {
      0: { slidesPerView: 1 },
      480: { slidesPerView: 2.2 },
      768: { slidesPerView: 3 },
      940: { slidesPerView: 4 },
      1240: { slidesPerView: 5 },
    },
  });
});
