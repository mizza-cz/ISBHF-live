const paginationList = document.querySelector(".calendarPagination-list");
const activeItem = document.querySelector(".calendarPagination-item.active");

if (paginationList && activeItem) {
  const scrollPosition =
    activeItem.offsetLeft -
    paginationList.clientWidth / 2 +
    activeItem.clientWidth / 2;

  paginationList.scrollLeft = scrollPosition;
}
