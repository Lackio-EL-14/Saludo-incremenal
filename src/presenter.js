import saludarSegunHora from "./saludarSegunHora";
import verificarGeneroYeDad from "./verificarGeneroYeDad";

const div = document.querySelector("#resultado");
const saludarBtn = document.querySelector("#saludar-btn");
const greetBtn = document.querySelector("#greet-btn");

function pedirDatos() {
  const nombre = prompt("¿Cuál es tu nombre?");
  const genero = prompt("¿Cuál es tu género? (masculino, femenino, otro)");
  const edad = parseInt(prompt("¿Cuál es tu edad?"), 10);
  return { nombre, genero, edad };
}

saludarBtn.addEventListener("click", () => {
  const { nombre, genero, edad } = pedirDatos();
  const saludo = saludarSegunHora(nombre, "es");
  const generoMsg = verificarGeneroYeDad(genero, edad, "es");
  div.innerHTML = `<p>${saludo}${generoMsg}</p>`;
});

greetBtn.addEventListener("click", () => {
  const { nombre, genero, edad } = pedirDatos();
  const saludo = saludarSegunHora(nombre, "en");
  const generoMsg = verificarGeneroYeDad(genero, edad, "en");
  div.innerHTML = `<p>${saludo}${generoMsg}</p>`;
});