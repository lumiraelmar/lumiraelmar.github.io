const header = document.querySelector('.header');
const sticky = header.offsetTop;

function stickyNavigation() {
  if (window.scrollY > sticky) {
    header.classList.add('sticky');
  } else {
    header.classList.remove('sticky');
  }
}
window.addEventListener('scroll', stickyNavigation);