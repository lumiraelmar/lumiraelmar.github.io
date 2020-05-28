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


//$(document).ready(function(){
  
  //$('.series-carousel').slick({
   // slidesToShow: 2,
   // slidesToScroll: 1,
   // arrows: true,
   // draggable: true,
   // infinite: true,
   // touchThreshold: 100,
   // accesibility: true,
   // swipeToSlide: true,
   // variableWidth: true,
   // responsive: [
   //   {
   //     breakpoint: 480,
   //     settings: "unslick"
   //     }
   // ]
 // });
//});


$slick_slider = $('.series-carousel');
  settings = {
    slidesToShow: 5,
    slidesToScroll: 1,
    arrows: true,
    draggable: true,
    infinite: true,
    touchThreshold: 100,
    accesibility: true,
    swipeToSlide: true,
    variableWidth: true,
  }
  $slick_slider.slick(settings);

  // reslick only if it's not slick()
  $(window).on('resize', function() {
    if ($(window).width() < 600) {
      if ($slick_slider.hasClass('slick-initialized')) {
        $slick_slider.slick('unslick');
      }
      return
    }

    if (!$slick_slider.hasClass('slick-initialized')) {
      return $slick_slider.slick(settings);
    }
  });