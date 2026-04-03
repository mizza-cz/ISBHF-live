document.querySelectorAll(".form__pass-toggle").forEach((btn) => {
  btn.addEventListener("click", function () {
    const input = this.closest(".form__pass").querySelector("input");

    const isPassword = input.type === "password";
    input.type = isPassword ? "text" : "password";

    this.classList.toggle("is-active", isPassword);
  });
});
