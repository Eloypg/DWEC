//Llamamos a la libreria del prompt
const prompt = require('prompt-sync')();

var hour = prompt("Dime que hora es (01h - 24h): ");

if (hour >= 1 && hour <= 24) {
    if(hour >= 7 && hour < 12) console.log("Buenos días");
    else if (hour >= 12 && hour <= 20) console.log("Buenas tardes");
    else if (hour > 20 || hour < 2) console.log("Buenas noches");
    else if (hour >= 2 && hour < 7) console.log("Que haces despierto a estas horas!!!")
} else {
    console.log("La hora introducida no es valida.")
}