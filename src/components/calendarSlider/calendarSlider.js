// const calendarSlider = document.querySelector(".calendarSlider");

// if (calendarSlider) {
//   const swiper = new Swiper(calendarSlider, {
//     slidesPerView: "auto",
//     spaceBetween: 48,
//     loop: true,

//     navigation: {
//       nextEl: ".next",
//       prevEl: ".prev",
//     },
//   });
// }
// const calendarSlider = document.querySelector(".calendarSlider");
// if (!calendarSlider) return;

// const swiper = new Swiper(calendarSlider, {
//   slidesPerView: "auto",
//   spaceBetween: 48,
//   loop: true,
//   centeredSlides: true,
//   slideToClickedSlide: true,

//   navigation: {
//     nextEl: ".next",
//     prevEl: ".prev",
//   },

//   on: {
//     init: function () {
//       const currentSlide = calendarSlider.querySelector(
//         ".swiper-slide.is-current"
//       );

//       if (!currentSlide) return;

//       const index = currentSlide.getAttribute("data-swiper-slide-index");

//       if (index !== null) {
//         this.slideToLoop(Number(index), 0);
//       }
//     },
//   },
// });

// calendarSlider.addEventListener("click", function (e) {
//   const slide = e.target.closest(".swiper-slide");
//   if (!slide) return;

//   e.preventDefault();

//   calendarSlider
//     .querySelectorAll(".swiper-slide")
//     .forEach((el) => el.classList.remove("is-current"));

//   slide.classList.add("is-current");

// });
