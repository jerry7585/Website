var navbar = document.getElementById('menubar');
var bar = document.querySelector('.bar');
var navbarLinks = document.querySelectorAll('.navbar-nav li a');

window.addEventListener('scroll', function() {
  if (window.scrollY > 0) {
    navbar.classList.add('scrolled');
    bar.classList.add('scrolled-bar');
    navbarLinks.forEach(link => link.classList.add('scrolled-navbar-nav'));
    console.log('JavaScript is working!');
  } else {
    navbar.classList.remove('scrolled');
    bar.classList.remove('scrolled-bar');
    navbarLinks.forEach(link => link.classList.remove('scrolled-navbar-nav'));
    console.log('JavaScript is NOT working!');
  }
});
