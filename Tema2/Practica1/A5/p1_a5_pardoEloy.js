function validateNumber() {
    // Obtener el valor del cuadro de entrada
    var numberInput = document.getElementById("number").value;

    // Verificar si el valor es un número
    if (!isNaN(numberInput) && numberInput.trim() !== '') {
        alert("El dato introducido es un número válido.");
    } else {
        alert("El dato introducido no es un número válido.");
    }
}