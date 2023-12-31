// Scroll sections active Links
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('.navbar .navbar-nav .nav-item a');

window.onscroll = () => {
  sections.forEach((sec) => {
    let top = window.scrollY;
    let offset = sec.offsetTop - 150;
    let height = sec.offsetHeight;
    let id = sec.getAttribute('id');

    if (top >= offset && top < offset + height) {
      navLinks.forEach((links) => {
        links.classList.remove('active');
        document.querySelector('.navbar .navbar-nav a[href*=' + id + ']').classList.add('active');
      });
    }
  });
  //   sticky navBar
  let header = document.querySelector('nav .container');

  header.classList.toggle('sticky', window.scrollY > 100);
};

// toogle icon navBar
// let menuIcon = document.querySelector('#menu-icon');
let navBar = document.querySelector('#navbarNav');

// menuIcon.onClick = () => {
//   menuIcon.classList.toogle('bx-x');
navBar.classList.remove('active');
// };

// scrollReveal
ScrollReveal({
  reset: true,
  distance: '80px',
  duration: 2000,
  delay: 200,
});

ScrollReveal().reveal('.home-content, .heading', { origin: 'top' });
ScrollReveal().reveal('.home-img, #project .container, #contact form', { origin: 'bottom' });
ScrollReveal().reveal('#home .home-content h1, #about .about-img ', { origin: 'left' });
ScrollReveal().reveal('#home .home-content p, #about .about-content', { origin: 'right' });

// typed js
const typed = new Typed('.multiple-text', {
  strings: ['Frontend Developer', 'Graphic Design', 'Businessman', 'Blogger'],
  typeSpeed: 100,
  backSpeed: 100,
  backDelay: 1000,
  loop: true,
});
