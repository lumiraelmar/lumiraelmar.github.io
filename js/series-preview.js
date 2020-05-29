const menuIcon = document.querySelector(".fa-bars-js");
const navbar = document.querySelector(".navbar-list-js");
const nav = document.querySelector(".nav-js");
const series = document.querySelector(".series-js");


menuIcon.onclick = function () {
  if(navbar.classList.contains("open")) {
    navbar.classList.remove("open")
  } else {
    navbar.classList.add("open")
  }
  }


  const settings = {
    slidesToShow: 2,
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
      settings: 'unslick'
    }
    ]
  };

  const carrousel = $(".series-carousel");

  $(document).ready(function(){
    carrousel.slick(settings);
  })

  $(window).on('resize', function() {
    if($(window).width() > 600 && !carrousel.hasClass('slick-initialized')) {
      carrousel.slick(settings);
    }
  });