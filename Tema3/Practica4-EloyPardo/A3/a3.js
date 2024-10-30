let primeNumber = 6;
let isPrime = false;
let divisorsCounter = 0;

//Recorre todos los números para contar los divisores
for (let i = 0; i <= primeNumber; i++){
    if(primeNumber % i === 0) {
        divisorsCounter++;
    }
}

//Comprueba los divisores, si son exactamente 2, es primo
if(divisorsCounter === 2) {
    isPrime = true;
    console.log(isPrime);
} else {
    console.log(isPrime)
}