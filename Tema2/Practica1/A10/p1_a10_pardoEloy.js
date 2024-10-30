// Capturar el evento submit del formulario
document.getElementById('formulario').addEventListener('submit', function(event) {
    event.preventDefault(); // Evitar que el formulario se envíe

    // Obtener la fecha ingresada
    const fechaIngresada = new Date(document.getElementById('fecha').value);
    const resultado = document.getElementById('resultado');

    // Verificar si es 25 de diciembre
    if (fechaIngresada.getDate() === 25 && fechaIngresada.getMonth() === 11) {
        resultado.textContent = "¡Es Navidad!";
    } else {
        resultado.textContent = "No es Navidad.";
    }
});