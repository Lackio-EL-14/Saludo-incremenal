function saludarSegunHora(nombre) {
  const fecha = new Date();
  const hora = fecha.getHours();
    let saludo;
    if (hora < 12) {
        saludo = "Buenos días" + nombre;
    } else if (hora < 18) {
        saludo = "Buenas tardes" + nombre;
    
    } else if (hora < 24) {
        saludo = "Buenas noches" + nombre;
    } else {
        saludo = "Buen madruge" + nombre;
    }   
    return saludo;
}

export default saludarSegunHora;