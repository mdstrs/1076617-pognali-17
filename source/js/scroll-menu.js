window.onscroll = function () { myFunction() };

var header = document.querySelector(".container");

var sticky = header.offsetTop;

function myFunction() {
  if (window.pageYOffset >= 125) {
    header.classList.add("fixed-header");
  } else {
    header.classList.remove("fixed-header");
  }
}
