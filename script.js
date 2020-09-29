
AOS.init();

window.addEventListener("scroll", function () {
  var navShadow = document.getElementsByClassName("navbar");
  navShadow[0].classList.toggle("navbar-shdw", window.scrollY > 0);
})

