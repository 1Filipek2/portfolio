document.body.style.opacity = 0;
document.body.style.transition = "opacity 1.2s";

window.addEventListener("DOMContentLoaded", () => {
  setTimeout(() => {
    document.body.style.opacity = 1;
  }, 100); // malá pauza pre plynulejší efekt
});