document.addEventListener("DOMContentLoaded", function() {
    const menuToggle = document.querySelector('.menu-toggle');
    const navMenu = document.getElementById('nav-menu');
  
    menuToggle.addEventListener('click', function() {
      navMenu.classList.toggle('active');
      menuToggle.classList.toggle('active');
    menuToggle.innerHTML = navMenu.classList.contains('active') ? '✖' : '&#9776;';
    });
  });