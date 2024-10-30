document.getElementById('generarBtn').addEventListener('click', function() {
    const numeroLimones = parseInt(document.getElementById('limones').value);
    const resultadoDiv = document.getElementById('resultado');
    resultadoDiv.textContent = ''; // Limpiar el resultado anterior

    // Validar la entrada
    if (isNaN(numeroLimones) || numeroLimones < 1) {
        resultadoDiv.textContent = "Por favor, introduce un número entero positivo.";
        return;
    }

    // Generar la letra de la canción
    let letraCancion = '';
    for (let i = 1; i < numeroLimones; i++) {
        letraCancion += `${i} limón${i > 1 ? 'es' : ''}, y medio limón.\n`;
    }

    // Última línea en mayúsculas
    letraCancion += `¡¡¡Y ${numeroLimones} LIMONES Y MEDIO LIMÓN!!!`;

    // Mostrar el resultado en la página
    resultadoDiv.textContent = letraCancion;
});