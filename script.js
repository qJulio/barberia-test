// Animación simple al scroll
window.addEventListener("scroll", () => {
  document.querySelectorAll(".card, .service-card").forEach(el => {
    const top = el.getBoundingClientRect().top;
    if (top < window.innerHeight - 100) {
      el.style.opacity = "1";
      el.style.transform = "translateY(0)";
    }
  });
});

// Formulario simulación
document.getElementById("form").addEventListener("submit", function(e) {
  e.preventDefault();
  alert("Mensaje enviado correctamente (simulación)");
  this.reset();
});