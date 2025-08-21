function verificarGenero(genero) {
    const generos = genero.toLowerCase()


    if (generos === "masculino") {
        return " eres muy " + genero;
    } else if (generos === "femenino") { 
        return " eres muy " + genero.slice(0, -1) + "a";
    } else {
        return "Tu genero no esta oficialmente definido";
    }
}

export default verificarGenero;