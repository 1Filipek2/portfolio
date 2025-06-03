document.body.style.opacity = 0;
document.body.style.transition = "opacity 1.2s";

window.addEventListener('DOMContentLoaded', () => {
  setTimeout(() => {
    document.body.classList.add('fade-in');
  }, 400); // Krátka pauza pre istotu načítania
  setTimeout(() => {
    const overlay = document.getElementById('black-overlay');
    if (overlay) overlay.style.display = 'none';
  }, 2400); // Skry overlay po fade-oute
});
