const series = document.querySelectorAll(".series-js");
const link = document.querySelectorAll(".link-js");
const hero = document.querySelector(".hero-img-js");
const preview = document.querySelector(".series-preview-js");
const menuIcon = document.querySelector(".fa-bars-js");
const hamburgerMenu = document.querySelector(".navbar-list-js")

function clickPreview() {
  hero.style.display = "none";
  preview.style.display = "block";
}

function home() {
  hero.style.display = "block";
  preview.style.display = "none";
}

function showNavbar() {
  
}

series.forEach (function(item) {
  item.addEventListener('click', clickPreview); 
});

link.forEach (function(item) {
  item.addEventListener('click', home); 
});

menuIcon.addEventListener('click', showNavbar);

