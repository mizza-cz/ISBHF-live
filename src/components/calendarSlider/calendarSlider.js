$(function () {
  let $slider = $(".calendarSlider");
  let $wrapper = $slider.find(".swiper-wrapper");

  let daysBefore = 20;
  let daysAfter = 20;

  let baseUrl = window.location.pathname;

  function pad(num) {
    return String(num).padStart(2, "0");
  }

  function toIsoDate(date) {
    return (
      date.getFullYear() +
      "-" +
      pad(date.getMonth() + 1) +
      "-" +
      pad(date.getDate())
    );
  }

  function normalizeDate(date) {
    return new Date(date.getFullYear(), date.getMonth(), date.getDate());
  }

  function getDayDiff(a, b) {
    let ms = 24 * 60 * 60 * 1000;
    return Math.round((normalizeDate(a) - normalizeDate(b)) / ms);
  }

  function getLabel(date, today) {
    let diff = getDayDiff(date, today);

    if (diff === -1) return "Yesterday";
    if (diff === 0) return "Today";
    if (diff === 1) return "Tomorrow";

    return date.getDate() + ". " + (date.getMonth() + 1) + ".";
  }

  function buildDayUrl(dateStr) {
    return baseUrl + "?date=" + encodeURIComponent(dateStr);

    // change url
    // return '/streams-schedule/' + dateStr;
  }

  function getSelectedDateFromUrl() {
    let params = new URLSearchParams(window.location.search);
    return params.get("date");
  }

  function buildSlides() {
    let today = new Date();
    let selectedDate = getSelectedDateFromUrl() || toIsoDate(today);
    let html = "";
    let selectedIndex = 0;
    let slideIndex = 0;

    for (let i = -daysBefore; i <= daysAfter; i++) {
      let date = new Date(today);
      date.setDate(today.getDate() + i);

      let isoDate = toIsoDate(date);
      let label = getLabel(date, today);
      let href = buildDayUrl(isoDate);
      let isActive = isoDate === selectedDate;

      if (isActive) {
        selectedIndex = slideIndex;
      }

      html += `
        <li class="swiper-slide">
          <a
            href="${href}"
            class="calendarSlider-day${isActive ? " is-active" : ""}"
            data-date="${isoDate}"
          >
            ${label}
          </a>
        </li>
      `;

      slideIndex++;
    }

    $wrapper.html(html);

    return selectedIndex;
  }

  let initialIndex = buildSlides();

  let swiper = new Swiper(".calendarSlider", {
    slidesPerView: "auto",
    centeredSlides: true,
    initialSlide: initialIndex,
    loop: false,
    spaceBetween: 48,
    navigation: {
      nextEl: ".calendarSlider .next",
      prevEl: ".calendarSlider .prev",
    },
    on: {
      init: function () {
        this.slideTo(initialIndex, 0);
      },
    },
  });

  //  AJAX

  /*
  $slider.on('click', '.calendarSlider-day', function (e) {
    e.preventDefault();

    let $link = $(this);
    let url = $link.attr('href');

    $slider.find('.calendarSlider-day').removeClass('is-active');
    $link.addClass('is-active');

    swiper.slideTo($link.closest('.swiper-slide').index());

    $.get(url, function (response) {
      $('.eventsContainer').html(response);
      window.history.replaceState({}, '', url);
    });
  });
  */
});
