// Definir la serie de números como una constante
const numeros = [1, 5, 8, 40, 100, -3, 2.5, 3000];

// Inicializar dos arrays para los números pequeños y grandes
let pequeños = [];
let grandes = [];

// Definir un umbral para la clasificación
const umbral = 5;

// Recorrer la serie de números y clasificarlos
for (let numero of numeros) {
    if (numero <= umbral) {
        pequeños.push(numero); // Agregar a la serie de pequeños
    } else {
        grandes.push(numero); // Agregar a la serie de grandes
    }
}

// Mostrar los resultados
console.log("Pequeños:", pequeños);
console.log("Grandes:", grandes);
