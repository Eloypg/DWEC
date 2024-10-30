let groups = ["0", "1", "2", "3", "4"];

//Lo recorremos y mostramos solo las posiciones impares
for(let i = 0; i < groups.length; i++) {
    if (i % 2 != 0) {
        console.log(groups[i]);
    }
}