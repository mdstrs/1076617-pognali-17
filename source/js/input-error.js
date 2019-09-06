var form = document.querySelector(".cta__form");
var input = form.querySelector('.cta-form__input')
var email = form.querySelector("[name=email]");
var error = form.querySelector("[placeholder=E-mail]");


form.addEventListener("submit", function(evt) {
    if (!email.value)
    evt.preventDefault();
    error.placeholder = "Введите e-mail";
    input.classList.add("cta-form__input--error");
});
