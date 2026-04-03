document.querySelectorAll(".form__pass-toggle").forEach((btn) => {
  btn.addEventListener("click", function () {
    const input = this.closest(".form__pass").querySelector(".form-control");
    const isPassword = input.type === "password";

    input.type = isPassword ? "text" : "password";

    this.classList.toggle("is-active", isPassword);

    this.setAttribute(
      "aria-label",
      isPassword ? "Hide password" : "Show password"
    );
  });
});
