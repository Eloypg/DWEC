// Función para lanzar el dado y generar números aleatorios entre 1 y 6
function lanzarDado() {
    let intentos = 0;
    let numero;
    let numerosGenerados = [];

    do {
        // Generar número aleatorio entre 1 y 6
        numero = Math.floor(Math.random() * 6) + 1;
        numerosGenerados.push(numero); // Guardar el número generado
        intentos++;
    } while (numero % 2 !== 0); // Continuar hasta que sea par

    // Mostrar los números generados en pantalla
    document.getElementById('numeros').textContent = `Números generados: ${numerosGenerados.join(', ')}`;

    // Mostrar el mensaje de resultado en pantalla
    document.getElementById('resultado').textContent = `He conseguido un número par después de ${intentos} veces.`;
}