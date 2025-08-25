function verificarGeneroYeDad(genero, edad, idioma = "es") {
    const generos = genero.toLowerCase();

    if (idioma === "en") {
        if (generos === "masculino") {
            if (edad > 30) {
                return " you are a very mature man.";
            } else {
                return " you are a young man.";
            }
        } else if (generos === "femenino") {
            if (edad > 30) {
                return " you are a very mature woman.";
            } else {
                return " you are a young woman.";
            }
        } else {
            if (edad > 30) {
                return " Your gender is not officially defined, dear.";
            } else {
                return " you are a young person, dear.";
            }
        }
    } else {
        if (generos === "masculino") {
            if (edad > 30) {
                return " es usted muy " + genero + " señor";
            } else {
                return " eres muy joven y " + genero;
            }
        } else if (generos === "femenino") {
            if (edad > 30) {
                return " es usted muy " + genero.slice(0, -1) + "a" + " señora";
            } else {
                return " eres muy joven y " + genero.slice(0, -1) + "a";
            }
        } else {
            if (edad > 30) {
                return " Tu genero no esta oficialmente definido señ@r";
            } else {
                return " eres muy joven y " + genero + " señ@r";
            }
        }
    }
}

export default verificarGeneroYeDad;