import saludarSegunHora from "./saludarSegunHora";
import verificarGenero from "./verificarGenero";


const form = document.querySelector("#nombre-form");
const input = document.querySelector("#nombre");
const generoInput = document.querySelector("#genero");
const generoForm = document.querySelector("#genero-form");
const div = document.querySelector("#resultado");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const firstName = input.value;
  const genero = generoInput.value;
  const saludo = saludarSegunHora(firstName);
  const generoMessage = verificarGenero(genero);

  div.innerHTML = "<p>Hola " + saludo + generoMessage +  "</p>";
});
