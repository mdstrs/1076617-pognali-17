
var buttonAdd = document.querySelector(".trip__choose-list-add");
var countryList = document.querySelector(".country-list");
var buttonDelete = countryList.querySelector(".country-list__close");

buttonAdd.addEventListener("click", function (evt) {
  evt.preventDefault();
  countryList.classList.add("country-list--show");
});

buttonDelete.addEventListener("click", function (evt) {
  evt.preventDefault();
  countryList.classList.remove("country-list--show");
});

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    evt.preventDefault();
    if (countryList.classList.contains("country-list--show")) {
      countryList.classList.remove("country-list--show");
    }
  }
});
