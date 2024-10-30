//En esta función le pasas el número de tu DNI y te devuelve la letra correspondiente.
function calculateDNIletter(dniNumber){
    const letters = "TRWAGMYFPDXBNJZSQVHLCKE";
    const resto = dniNumber % 23;
    return letters[resto];
}
let dniNumber = 26874631;
console.log(calculateDNIletter(dniNumber));

//Y en esta le pasamos el DNI al completo, y nos devolverá la letra.
function returnDNILetter(dni){
    let dniArray = dni.split("");
    for(let elem of dniArray){
        if(isNaN(elem)) console.log(`La letra de tu dni es: ${elem}.`)
    }
}
let dni = "26874631M";
returnDNILetter(dni);