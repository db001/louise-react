function fadeInNav() {
  const navbar = document.querySelector('.navbar');
  const about = document.querySelector('.about');
  const fadeInPoint = about.getBoundingClientRect().top - 200;

  if(fadeInPoint < 0) {
    navbar.style.background = `rgba(110, 182, 241, ${Math.abs(fadeInPoint / 100)})`;
  }
}

window.addEventListener('scroll', fadeInNav);