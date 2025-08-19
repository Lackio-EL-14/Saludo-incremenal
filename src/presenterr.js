
import multiplicar from "./multiplicador.js";

const first = document.querySelector("#mul-primer-numero");
const second = document.querySelector("#mul-segundo-numero");
const form = document.querySelector("#mul-form");
const div = document.querySelector("#resultado-multiplicacion");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const firstNumber = Number(first.value);
  const secondNumber = Number(second.value);

  div.innerHTML = "<p>" + multiplicar(firstNumber, secondNumber) + "</p>";
});
