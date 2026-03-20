let button = document.getElementById("hamburger");
const menu = document.getElementById("menu");
button.addEventListener("click", function () {
  menu.classList.toggle("ativa");
});

let email = document
  .getElementById("emailLink")
  .addEventListener("click", function (event) {
    event.preventDefault();
    window.location.href = "mailto:lmkindermann@gmail.com";
  });

let phone = document
  .getElementById("phoneLink")
  .addEventListener("click", function (event) {
    event.preventDefault();
    window.location.href = "tel:+5548991421484";
  });

var url =
  "https://www.bing.com/maps/search?style=r&q=S%C3%A3o+Jos%C3%A9-Santa+Catarina%2C+Brazil";
let map = document
  .getElementById("mapLink")
  .addEventListener("click", function (event) {
    event.preventDefault();
    window.open(url, "_blank");
  });
