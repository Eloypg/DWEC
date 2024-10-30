let array = [1,2,2,3,43,5,3,2,5,3,2,45,3,5,4765,876,87,5,322,45,14,326,43,76,7,43,53,25,467,54,7,5,643,432423]
let contador = 0;
for (let elem of array) {
    if(elem % 2 === 0) {
        contador++;
        console.log(elem);
    }
}
console.log("Contador: " + contador);