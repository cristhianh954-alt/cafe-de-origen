const boton = document.querySelector(".menu-boton");
const lista = document.querySelector(".nav__lista");
boton.addEventListener("click", () => {
 lista.classList.toggle("abierto");
});