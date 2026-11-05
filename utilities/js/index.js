
document.addEventListener("DOMContentLoaded", () => {

  const navbar = document.querySelector(".navBar");
  const botonMenu = document.querySelector(".menu-toggle");
  const listaMenu = document.querySelector(".firstList");
  const enlaces = listaMenu.querySelectorAll("a");

  // ABRIR Y CERRAR MENÚ
  botonMenu.addEventListener("click", () => {

    const abierto = listaMenu.classList.toggle("is-open");

    botonMenu.classList.toggle("is-active", abierto);

    botonMenu.setAttribute(
      "aria-expanded",
      String(abierto)
    );

    botonMenu.setAttribute(
      "aria-label",
      abierto ? "Cerrar menú" : "Abrir menú"
    );
  });

  // FUNCIÓN PARA CERRAR
  function cerrarMenu() {
    listaMenu.classList.remove("is-open");
    botonMenu.classList.remove("is-active");
    botonMenu.setAttribute("aria-expanded", "false");
    botonMenu.setAttribute("aria-label", "Abrir menú");
  }

  // CERRAR AL HACER CLIC EN UN ENLACE
  enlaces.forEach(enlace => {
    enlace.addEventListener("click", cerrarMenu);
  });

  // CERRAR AL HACER CLIC FUERA
  document.addEventListener("click", (e) => {
    if (!navbar.contains(e.target)) {
      cerrarMenu();
    }
  });

  // CERRAR CON ESCAPE
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" &&
        listaMenu.classList.contains("is-open")) {
      cerrarMenu();
      botonMenu.focus();
    }
  });

  // RESTABLECER AL VOLVER A ESCRITORIO
  const desktop = window.matchMedia("(min-width: 48.0625rem)");

  desktop.addEventListener("change", (e) => {
    if (e.matches) cerrarMenu();
  });

});
