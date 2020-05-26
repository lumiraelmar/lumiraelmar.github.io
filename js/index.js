const series = document.querySelectorAll(".series-js");
const link = document.querySelectorAll(".link-js");
const hero = document.querySelector(".hero-img-js");
const preview = document.querySelector(".series-preview-js");
const menuIcon = document.querySelector(".fa-bars-js");
const thumbsUp = document.querySelector(".fa-thumbs-up-js");
const thumbsDown = document.querySelector(".fa-thumbs-down-js");

function clickPreview() {
  hero.style.display = "none";
  preview.style.display = "block";
}

function home() {
  hero.style.display = "block";
  preview.style.display = "none";
}

function hamburguerMenu() {
  menuIcon.classList.toggle("active");
};

function thumbsUpColor() {
  thumbsUp.style.color = "green";
  thumbsUp.style.borderColor = "green";
};

function thumbsDownColor() {
  thumbsDown.style.color = "red";
  thumbsDown.style.borderColor = "red";
};

series.forEach (function(item) {
  item.addEventListener('click', clickPreview); 
});

link.forEach (function(item) {
  item.addEventListener('click', home); 
});

menuIcon.addEventListener('click', hamburguerMenu);

thumbsUp.addEventListener('click', thumbsUpColor);

thumbsDown.addEventListener('click', thumbsDownColor);