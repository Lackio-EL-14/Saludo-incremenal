function verificarGeneroYeDad(genero, edad) {
    const generos = genero.toLowerCase()


    if (generos === "masculino") {
        if (edad > 30) {
            return " es usted muy " + genero + " señor";
        }
         else {
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

export default verificarGeneroYeDad;