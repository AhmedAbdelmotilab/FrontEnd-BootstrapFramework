// Start NavBar Script
window.addEventListener('scroll', function () {
  const aboutSection = document.getElementById('about');
  const nav = document.querySelector('.my-nav');
  const sectionTop = aboutSection.offsetTop;
  if (window.scrollY >= sectionTop) {
    nav.classList.add('scrolled');
  } else {
    nav.classList.remove('scrolled');
  }
});
// End Navbar Script
// Start Animation Script From Type JS
document.addEventListener('DOMContentLoaded', () => {
  const options = {
    strings: ['Designer', 'Developer', 'Larry Daniels'],
    typeSpeed: 100,
    backSpeed: 50,
    loop: true,
    showCursor: true,
    cursorChar: '|',
    backDelay: 1000,
    startDelay: 500,
  };
  new Typed('#typed-text', options);
});
