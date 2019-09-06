var formSpisok = document.querySelector('.travelmates-form__list--music');
var formClosed = document.querySelector('.travelmates-form__button--music');

formClosed.addEventListener('click', function () {
  if (formSpisok.classList.contains('travelmates-form__list--closed')) {
    formSpisok.classList.remove('travelmates-form__list--closed');
    formSpisok.classList.add('travelmates-form__list--show');
  } else {
    formSpisok.classList.add('travelmates-form__list--closed');
    formSpisok.classList.remove('travelmates-form__list--show');
  }
});
