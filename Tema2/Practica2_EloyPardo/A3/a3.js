//Declaramos la matriz
var matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

//Imprimimos la diagonal
for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
        if (j ==0) {
            console.log(matrix[i][i]);
        }
    }
}