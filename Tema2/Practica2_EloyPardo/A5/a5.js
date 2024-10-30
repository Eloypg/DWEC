var randomArray = [];
const arrayLength = 10;

//Creación del array con números random
for (let i = 0; i < arrayLength; i++) {
    randomArray[i] = Math.floor(Math.random() * 5) + 1;
}

console.log(randomArray);

//Imprimir * por número
for (let i = 0; i < randomArray.length; i++) {
    let asteriskAmount = randomArray[i];
    let asterisks = '*'.repeat(asteriskAmount);
    console.log(asterisks);
}