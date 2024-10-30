document.getElementById('calcularBtn').addEventListener('click', function() {
    // Obtener los valores introducidos por el usuario
    const precioA = parseFloat(document.getElementById('precioA').value);
    const precioB = parseFloat(document.getElementById('precioB').value);
    const cantidadC = parseInt(document.getElementById('cantidadC').value);

    // Limpiar el resultado anterior
    const resultado = document.getElementById('resultado');
    resultado.textContent = '';

    // Verificar si los precios son iguales
    if (precioA === precioB) {
        // Calcular el ingreso total
        const ingresoTotal = (precioA + precioB) * cantidadC;
        resultado.textContent = `Ingreso total: ${ingresoTotal}`;
    } else {
        resultado.textContent = 'Los precios no son iguales. No se puede calcular el ingreso total.';
    }
});