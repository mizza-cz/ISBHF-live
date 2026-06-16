let calendarSwiper = null;

function initCalendarSlider() {
  const $slider = $(".calendarSlider");

  if (!$slider.length) return;

  let initialIndex = $slider
    .find(".calendarSlider-day.is-active")
    .closest(".swiper-slide")
    .index();

  if (initialIndex < 0) {
    initialIndex = 0;
  }

  if (calendarSwiper) {
    calendarSwiper.destroy(true, true);
    calendarSwiper = null;
  }

  calendarSwiper = new Swiper(".calendarSlider", {
    slidesPerView: "auto",
    centeredSlides: true,
    initialSlide: initialIndex,
    loop: false,
    spaceBetween: 48,

    breakpoints: {
      320: { spaceBetween: 20 },
      480: { spaceBetween: 24 },
      768: { spaceBetween: 24 },
      1024: { spaceBetween: 32 },
      1280: { spaceBetween: 48 },
    },

    navigation: {
      nextEl: ".calendarSlider .next",
      prevEl: ".calendarSlider .prev",
    },
  });
}

$(function () {
  initCalendarSlider();

  if (window.naja) {
    naja.snippetHandler.addEventListener("afterUpdate", function () {
      initCalendarSlider();
    });
  }
});
