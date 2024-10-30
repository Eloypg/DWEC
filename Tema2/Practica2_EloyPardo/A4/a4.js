//Matriz normal
var matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];
//Matrix transpuesta
var matrixTras = [
    [],
    [],
    []
];

//Rellenamos la matriz tranpuesta
for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
        matrixTras[j][i] = matrix[i][j];
        matrixTras[j][i] = matrix[i][j];
        matrixTras[j][i] = matrix[i][j];
    }
}
//Imprimimos la matriz transpuesta
for (let i = 0; i < matrixTras.length; i++) {
    console.log(matrixTras[i]);
}