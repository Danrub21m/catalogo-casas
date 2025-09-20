const botones = document.querySelectorAll(".btn-detalles");

botones.forEach((boton) => {
  boton.addEventListener("click", () => {
    const detalles = boton.nextElementSibling;

    if (detalles.style.display === "block") {
      detalles.style.display = "none";
      boton.textContent = "Ver Detalles";
    } else {
      detalles.style.display = "block";
      boton.textContent = "Ocultar Detalles";
    }
  });
});
