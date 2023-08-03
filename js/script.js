/*
    Code to make bar at top static and change colors
*/
document.addEventListener('DOMContentLoaded', function() {
  var navbarLinks = document.querySelectorAll('.navbar-nav li a');
  var bar = document.querySelector('.bar');
  var logoText = document.querySelector('.logo-text');
  var footer = document.querySelector('#return-top')

  window.addEventListener('scroll', function() {
    if (window.scrollY > 0) {
      document.querySelector('.navbar-nav').classList.add('scrolled');
      bar.classList.add('scrolled-bar');
      logoText.classList.add('scrolled'); 
      footer.classList.add('scrolled');
      console.log('Navigation bar: JS working!');
    } else {
      document.querySelector('.navbar-nav').classList.remove('scrolled');
      bar.classList.remove('scrolled-bar');
      logoText.classList.remove('scrolled'); 
      footer.classList.remove('scrolled');
      console.log('Navigation bar: JS NOT working!');
    }
  });
});

/*
    Code to allow for smooth scrolling on "learn more" button
*/
document.addEventListener('DOMContentLoaded', function() {
  var learnMoreLink = document.getElementById('learn-more-btn');

  learnMoreLink.addEventListener('click', function(event) {
      event.preventDefault(); // Prevent the default anchor behavior

      var targetElement = document.getElementById('about');
      var targetOffset = targetElement.getBoundingClientRect().top;
      var headerOffset = 60; // Adjust this value to account for your fixed header height

      // Calculate the final scroll position
      var scrollTarget = targetOffset + window.scrollY - headerOffset;

      // Smooth scroll to the target element
      window.scrollTo({
          top: scrollTarget,
          behavior: 'smooth'
      });
  });
});

/*
    Code to allow for smooth scrolling on navigation menu items
*/
document.addEventListener('DOMContentLoaded', function() {
  var navLinks = document.querySelectorAll('.smooth-scroll');

  navLinks.forEach(link => {
    link.addEventListener('click', function(event) {
      event.preventDefault(); // Prevent default link behavior

      var target = document.querySelector(link.getAttribute('href'));
      var offset = 60; // Adjust this offset if you have a fixed navigation bar

      if (target) {
        var top = target.getBoundingClientRect().top + window.scrollY - offset;
        window.scrollTo({ top: top, behavior: 'smooth' });
      }
    });
  });
});


/*
    Initialize the owl carousel
*/
document.addEventListener('DOMContentLoaded', function() {
  //Get all the icon elements
  const icons = document.querySelectorAll('.icon');

  //Set carousel to show up to a max of 5 only
  const itemsToShow = Math.min(icons.length, 5);

  //Initialize owl carousel
  $('.icon-container').owlCarousel({
      loop: true, 
      margin: 70, 
      nav: false, // doesnt show next and prev buttons
      responsive: {
          0: {
              items: 1 // Show one item on small screens
          },
          1000: {
              items: itemsToShow // Show the calculated number of items on screens larger than 1000px
          }
      }
  });
  $('.next-btn').click(function() {
    $('.icon-container').trigger('next.owl.carousel');
  });

  $('.prev-btn').click(function() {
    $('.icon-container').trigger('prev.owl.carousel');
  });
});


/*
    Code for the 
*/