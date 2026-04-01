const topstorySlider = document.querySelector(".topstorySlider");

if (topstorySlider) {
  const swiper = new Swiper(topstorySlider, {
    slidesPerView: 1,
    spaceBetween: 0,
    loop: false,

    navigation: {
      nextEl: ".next",
      prevEl: ".prev",
    },

    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
      loop: true,
    },

    breakpoints: {
      640: {
        autoplay: false,
        loop: false,
      },
    },
  });
}
