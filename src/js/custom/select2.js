$(function () {
  $(".js-select").each(function () {
    const $select = $(this);
    const $form = $select.closest("form");

    $select.select2({
      width: "style",
      minimumResultsForSearch: Infinity,
      dropdownParent: $form,
    });
  });

  $(".js-select").on("change", function () {
    $(this).closest("form").trigger("submit");
  });

  $(".js-select-search").each(function () {
    const $select = $(this);

    $select.select2({
      width: "100%",
      placeholder: "Select country",
      allowClear: true,
      dropdownParent: $select.parent(),
    });
  });
});
