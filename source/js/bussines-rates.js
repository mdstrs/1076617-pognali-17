var link = document.querySelector(".rates__button");
var popup = document.querySelector(".business-rates");
var close = document.querySelector(".business-rates__button--closed");

link.addEventListener("click", function (evt) {
  evt.preventDefault();
  popup.classList.add("business-rates--show");
});

close.addEventListener("click", function (evt) {
  evt.preventDefault();
  popup.classList.remove("business-rates--show");
});

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    evt.preventDefault();
    if (popup.classList.contains("business-rates--show")) {
      popup.classList.remove("business-rates--show");
    }
  }
});
