/*
    Code to make bar at top static and change colors
*/

document.addEventListener('DOMContentLoaded', function() {
  var navbarLinks = document.querySelectorAll('.navbar-nav li a');
  var bar = document.querySelector('.bar');

  window.addEventListener('scroll', function() {
    if (window.scrollY > 0) {
      document.querySelector('.navbar-nav').classList.add('scrolled');
      bar.classList.add('scrolled-bar');
      console.log('Navigation bar: JS working!');
    } else {
      document.querySelector('.navbar-nav').classList.remove('scrolled');
      bar.classList.remove('scrolled-bar');
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
    Code for hovering and displaying description on SKILLS section
*/
document.addEventListener('DOMContentLoaded', function() {
  const icons = document.querySelectorAll('.icon');

  icons.forEach(function(icon) {
      const description = icon.querySelector('.description');
      const progressBar = icon.querySelector('.progress-fill');
      const progressTooltip = icon.querySelector('.progress-tooltip'); // Get the tooltip element
      const percentage = parseInt(description.dataset.progress);

      description.style.display = 'none';

      icon.addEventListener('mouseover', function() {
          description.style.display = 'block';
          progressBar.style.width = percentage + '%';
          progressTooltip.style.display = 'block'; // Show the tooltip on mouseover
      });

      icon.addEventListener('mouseout', function() {
          description.style.display = 'none';
          progressTooltip.style.display = 'none'; // Hide the tooltip on mouseout
      });

      // Update the tooltip text with the percentage value
      progressTooltip.innerText = percentage + '%';
  });
});
