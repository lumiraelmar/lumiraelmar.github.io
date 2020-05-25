const series = document.querySelectorAll(".series-js");
const link = document.querySelectorAll(".link");
const hero = document.querySelector(".hero-img");
const preview = document.querySelector(".series-preview");


function clickI() {
  hero.style.display = "none";
  preview.style.display = "block";
}

function home() {
  hero.style.display = "block";
  preview.style.display = "none";
}

series.forEach (function(item) {
  item.addEventListener('click', clickI) 
});

link.forEach (function(item) {
  item.addEventListener('click', home) 
});