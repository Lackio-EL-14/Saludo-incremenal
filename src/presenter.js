import saludarSegunHora from "./saludarSegunHora";
import verificarGeneroYeDad from "./verificarGeneroYeDad";


const form = document.querySelector("#nombre-form");
const input = document.querySelector("#nombre");
const generoInput = document.querySelector("#genero");
const inputEdad = document.querySelector("#edad");

const div = document.querySelector("#resultado");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const firstName = input.value;
  const genero = generoInput.value;
  const edad = parseInt(inputEdad.value, 10);
  const saludo = saludarSegunHora(firstName,"en"); // Para inglés
  // const saludo = saludarSegunHora(firstName,"es"); // Para español
  const generoMessage = verificarGeneroYeDad(genero, edad, "en"); // Para inglés
  // const generoMessage = verificarGeneroYeDad(genero, edad, "es");

  div.innerHTML = "<p>Hola " + saludo + generoMessage +  "</p>";
});
