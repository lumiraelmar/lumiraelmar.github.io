const menuIcon = document.querySelector(".fa-bars-js");
const navbar = document.querySelector(".navbar-list-js");
const nav = document.querySelector(".nav-js");
const series = document.querySelector(".series-js");


$(document).ready(function(){
  
  $('.series-carousel').slick({
    slidesToShow: 5,
    slidesToScroll: 1,
    arrows: true,
    draggable: true,
    infinite: true,
    touchThreshold: 100,
    variableWidth: true,
    accesibility: true,
  });

});