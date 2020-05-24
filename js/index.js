const series = document.querySelectorAll(".series-js");
const link = document.querySelectorAll(".link");
const hero = document.querySelector(".hero-img");
const preview = document.querySelector(".series-preview");



function clickI() {

  hero.classList.toggle("active");
  preview.classList.toggle("active");
}

function home() {
  hero.classList.toggle("active");
  preview.classList.toggle("active");
}

series.forEach (function(item) {
  item.addEventListener('click', clickI) 
});

link.forEach (function(item) {
  item.addEventListener('click', home) 
});