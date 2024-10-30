//FUNCION RECURSIVA PARA CALCULAR EL FACTORIAL
function factorial(n) {
    if (n <= 1) {
        return 1;
    } else {
        return n * factorial(n - 1);
    }
}

//FUNCION QUE MANEJA LA INTERACCION CON EL USUARIO
function collectFactors() {
    let inputValue = document.getElementById('number').value;
    let numbers = [];

    //FUNCION RECURSIVA PARA PREGUNTAR NUMEROS
    function askForNumbers() {
        inputValue = document.getElementById('number').value;

        if (inputValue === '') {
            displayResults(numbers);
        } else {
            numbers.push(parseInt(inputValue));
            document.getElementById('number').value = '';
            askForNumbers();
        }
    }

    //FUNCION PARA MOSTRAR LOS RESULATDOS
    function displayResults(numbers) {
        let resultDiv = document.getElementById('result');
        resultDiv.innerHTML = '';  // Clear the div

        numbers.forEach(function(number) {
            let factorialResult = factorial(number);
            let resultLine = document.createElement('p');
            resultLine.textContent = `El factorial de ${number} es: ${factorialResult}`;
            resultDiv.appendChild(resultLine);
        });
    }

    //LLAMA A LA FUNCION PARA PREGUNTAR POR NUMEROS
    askForNumbers();
}

window.onload = function() {
    document.getElementById('button').addEventListener('click', collectFactors);
}