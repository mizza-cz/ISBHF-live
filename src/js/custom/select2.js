$(".js-select").select2({
  width: "100%",
  minimumResultsForSearch: -1,
});

$(function () {
  $(".js-select").on("change", function () {
    $(this).closest("form").submit();
  });
});

$(".js-select-search").select2({
  width: "100%",
  placeholder: "Select country",
  allowClear: true,
});
