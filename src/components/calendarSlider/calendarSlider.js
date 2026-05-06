$(function () {
  let $slider = $(".calendarSlider");

  let initialIndex = $slider
    .find(".calendarSlider-day.is-active")
    .closest(".swiper-slide")
    .index();

  if (initialIndex < 0) {
    initialIndex = 0;
  }

  new Swiper(".calendarSlider", {
    slidesPerView: "auto",
    centeredSlides: true,
    initialSlide: initialIndex,
    loop: false,

    spaceBetween: 48,

    breakpoints: {
      320: {
        spaceBetween: 20,
      },
      480: {
        spaceBetween: 24,
      },
      768: {
        spaceBetween: 24,
      },
      1024: {
        spaceBetween: 32,
      },
      1280: {
        spaceBetween: 48,
      },
    },

    navigation: {
      nextEl: ".calendarSlider .next",
      prevEl: ".calendarSlider .prev",
    },
  });
});
