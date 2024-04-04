// JavaScript code to handle responsive behavior

// Function to toggle navigation menu on small screens
function toggleMenu() {
    const menuIcon = document.getElementById('menu-icon');
    const navbar = document.querySelector('.navbar');

    menuIcon.addEventListener('click', () => {
        navbar.classList.toggle('show');
    });
}

// Function to close navigation menu when a menu item is clicked
function closeMenu() {
    const navbarLinks = document.querySelectorAll('.navbar a');

    navbarLinks.forEach(link => {
        link.addEventListener('click', () => {
            const navbar = document.querySelector('.navbar');
            navbar.classList.remove('show');
        });
    });
}

// Call the functions when the DOM content is loaded
document.addEventListener('DOMContentLoaded', () => {
    toggleMenu();
    closeMenu();
});


  // Function to toggle between day and night mode
  function toggleLight() {
    var body = document.body;
    body.classList.toggle('night');
  }

  // Event listener for button click
  document.getElementById('toggleButton').addEventListener('click', toggleLight);