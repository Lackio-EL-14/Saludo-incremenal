import saludarSegunHora from "./saludarSegunHora";
import verificarGeneroYeDad from "./verificarGeneroYeDad";


const form = document.querySelector("#nombre-form");
const input = document.querySelector("#nombre");
const generoInput = document.querySelector("#genero");
const generoForm = document.querySelector("#genero-form");
const inputEdad = document.querySelector("#edad");

const div = document.querySelector("#resultado");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const firstName = input.value;
  const genero = generoInput.value;
  const edad = parseInt(inputEdad.value, 10);
  const saludo = saludarSegunHora(firstName);
  const generoMessage = verificarGeneroYeDad(genero, edad);

  div.innerHTML = "<p>Hola " + saludo + generoMessage +  "</p>";
});
