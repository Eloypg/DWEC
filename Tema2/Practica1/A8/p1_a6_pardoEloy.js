// Capturar el formulario
document.getElementById('formulario').addEventListener('submit', function(event) {
    event.preventDefault(); // Evitar que el formulario se envíe

    // Obtener el valor del campo número
    const numero = parseInt(document.getElementById('numero').value);
    const resultado = document.getElementById('resultado');
    resultado.textContent = ''; // Limpiar el contenido anterior

    // Validar que sea un número positivo
    if (!isNaN(numero) && numero > 0) {
        let piramide = '';
        for (let i = 1; i <= numero; i++) {
            // Generar cada línea de la pirámide con asteriscos separados por espacios
            piramide += '* '.repeat(i).trim() + '\n';
        }
        resultado.textContent = piramide; // Mostrar la pirámide en el elemento <pre>
    }
});