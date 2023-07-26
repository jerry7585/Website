document.addEventListener('DOMContentLoaded', function() {
  var navbarLinks = document.querySelectorAll('.navbar-nav li a');
  var bar = document.querySelector('.bar');

  window.addEventListener('scroll', function() {
    if (window.scrollY > 0) {
      navbarLinks.forEach(link => link.classList.add('scrolled-navbar-nav'));
      bar.classList.add('scrolled-bar');
      console.log('JavaScript is working!');
    } else {
      navbarLinks.forEach(link => link.classList.remove('scrolled-navbar-nav'));
      bar.classList.remove('scrolled-bar');
      console.log('JavaScript is NOT working!');
    }
  });
});
