// main.js
// Aquí puedes agregar funcionalidades JS personalizadas para la landing page 

document.addEventListener('DOMContentLoaded', function() {
  const hamburger = document.getElementById('hamburgerBtn');
  const mobileMenu = document.getElementById('mobileMenu');
  const closeMenuBtn = document.getElementById('closeMenuBtn');
  if (hamburger && mobileMenu) {
    hamburger.addEventListener('click', function() {
      mobileMenu.classList.toggle('open');
      if (closeMenuBtn) closeMenuBtn.style.display = mobileMenu.classList.contains('open') ? 'block' : 'none';
    });
    if (closeMenuBtn) {
      closeMenuBtn.addEventListener('click', function() {
        mobileMenu.classList.remove('open');
        closeMenuBtn.style.display = 'none';
      });
    }
    // Cerrar menú al hacer click en un enlace
    mobileMenu.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        mobileMenu.classList.remove('open');
        if (closeMenuBtn) closeMenuBtn.style.display = 'none';
      });
    });
  }
}); 