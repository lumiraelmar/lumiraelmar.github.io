const menuIcon = document.querySelector(".fa-bars-js");
const navbar = document.querySelector(".navbar-list-js");
const links = document.querySelectorAll(".navbar-list-item");


function toggleMenu() {
  if(navbar.classList.contains("open")) {
    navbar.classList.remove("open");
  } else {
    navbar.classList.add("open");
  }
}


links.forEach(function (link) {
  link.onclick = function () {
    navbar.classList.remove("open");
  }
});

//link.addEventListener("click", ()=>{

  menuIcon.onclick = function (e) {
    e.stopPropagation();
    toggleMenu();
  }

  navbar.onclick = function (e) {
    e.stopPropagation();
  }

  document.body.onclick = function () {
    navbar.classList.remove("open");
  }

$(document).ready(function(){
  
  $('.series-carousel').slick({
    slidesToShow: 5,
    slidesToScroll: 1,
    arrows: true,
    draggable: true,
    infinite: true,
    touchThreshold: 100,
    accesibility: true,
    swipeToSlide: true,
    variableWidth: true,
    responsive: [
      {
        breakpoint: 600,
        settings: {
          arrows: false,
          variableWidth: true,
        }
        }
    ]
  });
});