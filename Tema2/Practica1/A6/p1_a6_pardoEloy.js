//Libreria para que prompt funcione por consola
const prompt = require('prompt-sync')();



//Comprobación de la edad

do {
    //Pedir datos por consola
    console.log("\nEscribe 'salir' para salir del programa");
    var age = prompt("Dime tu edad porfavor: ");

    if (!isNaN(age) && age.trim() !== '') { //Con esta condicion comprobamos que es un número
        console.log("\nEl dato introducido es valido. Según tu edad eres un/a: ")
        if (age >= 0 && age < 12) console.log("Niño");
        else if (age >= 12 && age <= 17) console.log("Adolescente");
        else if (age >= 18 && age <= 64) console.log("Adulto");
        else if (age >= 65) console.log("Adulto mayor");
        else if (age < 0)console.log("No eres nada, es imposible que tengas edad negativa!!!")
    } else if (age != "salir") {
        console.log("\nEl dato introducido no es un número válido.");
    }
} while (age != "salir");
    console.log("\nHas salido del programa.");