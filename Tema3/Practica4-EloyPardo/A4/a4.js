function isPrimeNumber(n) {
    let divisorsCounter = 0;
    //Comprobamos si es primo o no, contando los divisores que tiene
    for (let i = 0; i <= n; i++){
        if(n % i === 0) {
            divisorsCounter++;
        }
    }
    //Si tiene 2 divisores es primo sino no
    if(divisorsCounter === 2) {
        return true;
    } else {
        return false;
    }
}

function showPrimes() {
    const primeNumbers = document.getElementById("primeNumbers");
    primeNumbers.innerHTML = '';

    for (let i = 1; i <= 1000; i++) {
        if (isPrimeNumber(i)) {
            //Crear un elemento div para cada número primo
            const primeDiv = document.createElement("div");
            primeDiv.textContent = i;
            primeNumbers.appendChild(primeDiv);
        }
    }
}