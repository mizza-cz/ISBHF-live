$(function () {
  $(".btn, .status-badge, .profile-card, .setting-box").on(
    "mouseenter",
    function () {
      $(this).addClass("is-hovered");
    }
  );

  $(".btn, .status-badge, .profile-card, .setting-box").on(
    "mouseleave",
    function () {
      $(this).removeClass("is-hovered");
    }
  );
});
