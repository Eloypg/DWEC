// Capturar el evento submit del formulario
document.getElementById('formulario').addEventListener('submit', function(event) {
    event.preventDefault(); // Evitar que el formulario se envíe

    // Obtener los valores de los tres números
    const numero1 = parseFloat(document.getElementById('numero1').value);
    const numero2 = parseFloat(document.getElementById('numero2').value);
    const numero3 = parseFloat(document.getElementById('numero3').value);

    // Referencia al elemento donde se mostrará el resultado
    const resultado = document.getElementById('resultado');

    // Verificar si alguno de los números es menor a 10
    if (numero1 < 10 || numero2 < 10 || numero3 < 10) {
        resultado.textContent = "Alguno de los números son menores a diez.";
    } else {
        resultado.textContent = "Todos los números son 10 o mayores.";
    }
});