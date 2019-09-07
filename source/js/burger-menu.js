var navMain = document.querySelector(".page-header");
var navToggle = document.querySelector(".menu-toogle");


navMain.classList.remove("page-header--nojs");

navToggle.addEventListener("click", function () {
  if (navMain.classList.contains("page-header--active")) {
    navMain.classList.remove("page-header--active");
    navMain.classList.add("page-header--closed");
  } else {
    navMain.classList.add("page-header--active");
    navMain.classList.remove("page-header--closed");
  }
});
