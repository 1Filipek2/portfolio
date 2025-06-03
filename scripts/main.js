document.body.style.opacity = 0;
document.body.style.transition = "opacity 1.2s";

window.addEventListener("DOMContentLoaded", () => {
  setTimeout(() => {
    document.body.style.opacity = 1;
  }, 100); // malá pauza pre plynulejší efekt
});

window.addEventListener("DOMContentLoaded", () => {
  const overlay = document.getElementById("black-overlay");
  setTimeout(() => {
    overlay.style.opacity = "0";
  }, 100); // malá pauza pre istotu
  setTimeout(() => {
    overlay.style.display = "none";
  }, 2100); // skryť po fade-oute
});