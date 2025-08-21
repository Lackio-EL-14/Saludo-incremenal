import saludarSegunHora from "./saludarSegunHora";



const form = document.querySelector("#nombre-form");
const input = document.querySelector("#nombre");
const div = document.querySelector("#resultado");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const firstName = input.value;


  div.innerHTML = "<p>Hola " + saludarSegunHora(firstName)  + "</p>";
});
