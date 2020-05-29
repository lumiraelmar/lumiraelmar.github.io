const menuIcon = document.querySelector(".fa-bars-js");
const navbar = document.querySelector(".navbar-list-js");
const links = document.querySelectorAll(".navbar-list-item");


menuIcon.onclick = function () {
  if(navbar.classList.contains("open")) {
    navbar.classList.remove("open")
  } else {
    navbar.classList.add("open")
  }
  }


  links.forEach(link => link.addEventListener("click", ()=>{
    navbar.classList.remove("open");
  }))


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