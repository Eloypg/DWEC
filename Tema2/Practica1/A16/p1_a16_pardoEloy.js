const prompt = require("prompt-sync")();

// Inicializar un array para almacenar las notas
let notas = [];

// Bucle para permitir la entrada de notas
while (true) {
    // Solicitar al usuario que ingrese una nota o 'salir' para terminar
    let entrada = prompt("Ingresa una nota (0-100) o 'salir' para terminar:");

    // Comprobar si el usuario desea salir
    if (entrada.toLowerCase() === 'salir') {
        break;
    }

    // Convertir la entrada a número
    let nota = Number(entrada);

    // Validar que la nota esté en el rango de 0 a 100
    if (!isNaN(nota) && nota >= 0 && nota <= 100) {
        // Agregar la nota al array
        notas.push(nota);
    } else {
        console.log("Por favor, ingresa una nota válida entre 0 y 100.");
    }
}

// Calcular la cantidad de notas
const cantidadNotas = notas.length;

// Verificar si se ingresaron notas
if (cantidadNotas > 0) {
    // Encontrar la nota más alta y la más baja
    const notaMasAlta = Math.max(...notas);
    const notaMasBaja = Math.min(...notas);

    // Calcular el promedio
    const sumaNotas = notas.reduce((acc, curr) => acc + curr, 0);
    const promedio = sumaNotas / cantidadNotas;

    // Determinar si el promedio es aprobado o reprobado
    const estado = promedio >= 70 ? "Aprobado" : "Suspendido";

    // Mostrar los resultados
    console.log(`Cantidad de notas ingresadas: ${cantidadNotas}`);
    console.log(`Nota más alta: ${notaMasAlta}`);
    console.log(`Nota más baja: ${notaMasBaja}`);
    console.log(`Promedio: ${promedio.toFixed(2)}`);
    console.log(`Estado: ${estado}`);
} else {
    console.log("No se ingresaron notas.");
}
