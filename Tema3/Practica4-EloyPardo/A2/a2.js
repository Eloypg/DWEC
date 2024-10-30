let rowsInput = document.getElementById("rows");
let columnsInput = document.getElementById("columns");
let generatorButton = document.getElementById("generatorButton");
let htmlTable = document.getElementById("htmlTable");

//Función para crear y mostrar la tabla
function createTable(rows, columns) {
    //Asegurarnos de que son números y enteros
    rows = parseInt(rows) || 10;  //10 como predeterminado
    columns = parseInt(columns) || 4;  //4 como predeterminado

    //Creamos la tabla que iremos modificando (dinámica)
    const table = document.createElement("table");

    //Bucle para ir generando las filas y columnas
    for (let i = 0; i < rows; i++) {
        const tr = document.createElement("tr");//Crear fila
        for (let j = 0; j < columns; j++) {
            const td = document.createElement("td");//Crear celda
            td.textContent = `Fila ${i+1} Col ${j+1}`;//Añadir texto a la celda, aunque no es necesario
            tr.appendChild(td);//Añadir celda a la fila
        }
        table.appendChild(tr);//Añadir fila a la tabla
    }

    //Insertar la tabla en el HTML
    htmlTable.innerHTML = "";//Limpiar cualquier contenido anterior
    htmlTable.appendChild(table);//Añadir la nueva tabla
}

//Añadir el listener al botón para generar la tabla
generatorButton.addEventListener("click", function() {
    //Obtener los valores actuales de los inputs
    const rows = rowsInput.value;
    const columns = columnsInput.value;

    //Llamar a la función createTable
    createTable(rows, columns);
});
