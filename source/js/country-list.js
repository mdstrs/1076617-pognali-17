var filterOpen = document.querySelector(".filter__wrapper");
var filterToggle = document.querySelector('.filter__button');

filterToggle.addEventListener('click', function () {
  if (filterOpen.classList.contains('filter__wrapper--closed')) {
    filterOpen.classList.remove('filter__wrapper--closed');
    filterOpen.classList.add('filter__wrapper--active');
  } else {
    filterOpen.classList.add('filter__wrapper--closed');
    filterOpen.classList.remove('filter__wrapper--active');
  }
});
