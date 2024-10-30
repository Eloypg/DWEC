// Función para verificar si el texto es un palíndromo
function palindromeVerifier() {
    // Obtener el valor ingresado
    let texto = document.getElementById('introducedText').value;

    // Lulas y eliminar espacios en blancimpiar el texto: convertir a minúsco y caracteres especiales
    let textoLimpio = texto.toLowerCase().replace(/[\W_]/g, '');

    // Verificar si el texto limpio es igual al texto invertido
    let esPalindromo = textoLimpio === textoLimpio.split('').reverse().join('');

    // Mostrar el resultado
    if (esPalindromo) {
        document.getElementById('resultado').innerText = `"${texto}" es un palíndromo.`;
    } else {
        document.getElementById('resultado').innerText = `"${texto}" no es un palíndromo.`;
    }
}