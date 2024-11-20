// Toggle menu functionality
const menuToggle = document.querySelector('.menu-toggle');
const navItems = document.querySelector('.nav-items');
const menuIcon = menuToggle.querySelector('i');

menuToggle.addEventListener('click', () => {
  navItems.classList.toggle('visible'); // Toggle visibility class

  // Toggle the icon between bars and cross
  if (menuIcon.classList.contains('fa-bars')) {
    menuIcon.classList.remove('fa-bars');
    menuIcon.classList.add('fa-times');
  } else {
    menuIcon.classList.remove('fa-times');
    menuIcon.classList.add('fa-bars');
  }

  // Add light animation
  menuIcon.style.transition = 'transform 0.3s ease';
  
});
