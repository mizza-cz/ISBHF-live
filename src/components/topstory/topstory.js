const topstorySlider = document.querySelector(".topstorySlider");

if (topstorySlider) {
  const swiper = new Swiper(topstorySlider, {
    slidesPerView: 1,
    spaceBetween: 0,
    loop: true,

    navigation: {
      nextEl: ".next",
      prevEl: ".prev",
    },

    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },
  });
}
