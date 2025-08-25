function saludarSegunHora(nombre, idioma = "es", hora = new Date().getHours()) {
  let saludo;
  if (idioma === "en") {
    if (hora < 12) {
      saludo = "Good morning " + nombre;
    } else if (hora < 18) {
      saludo = "Good afternoon " + nombre;
    } else if (hora < 24) {
      saludo = "Good evening " + nombre;
    } else {
      saludo = "Good night " + nombre;
    }
  } else {
    if (hora < 12) {
      saludo = "Buenos dias " + nombre;
    } else if (hora < 18) {
      saludo = "Buenas tardes " + nombre;
    } else if (hora < 24) {
      saludo = "Buenas noches " + nombre;
    } else {
      saludo = "Buen madruge " + nombre;
    }
  }
  return saludo;
}

export default saludarSegunHora;
