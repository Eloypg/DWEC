const prompt = require("prompt-sync")();

var num1 = prompt("Número 1: ");
var num2 = prompt("Número 2: ");
var num3 = prompt("Número 3: ");

function mayorDeTres(a, b, c) {
    // Comparar los tres números y devolver el mayor
    if (a >= b && a >= c) {
        return a;
    } else if (b >= a && b >= c) {
        return b;
    } else {
        return c;
    }
}

const mayor = mayorDeTres(num1, num2, num3);
console.log(`El mayor de los tres números es: ${mayor}`);
