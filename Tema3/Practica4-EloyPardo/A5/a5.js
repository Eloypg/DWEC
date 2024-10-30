function collectWords() {
    let words = new Set();
    let introducedWord;

    //Bucle para pedir palabras hasta que la entrada esté vacía o se cancele
    do {
        introducedWord = prompt("Dime una palabra (deja en blanco para finalizar):");

        if (introducedWord && introducedWord.trim() !== "") {
            words.add(introducedWord.trim().toLowerCase()); // Agregar la palabra eliminando espacios y en minúsculas
        }

    } while (introducedWord !== null && introducedWord.trim() !== ""); // Continuar hasta que se introduzca una cadena vacía o se cancele

    //Aqui pasamo de Set a Array, y lo ordenamos de forma inversa
    const sortedWords = Array.from(words).sort().reverse(); 

    const wordContainer = document.getElementById('wordContainer');
    wordContainer.innerHTML = '';//Limpiar contenido previo
    
    //Mostrar palabras ordenadas en el contenedor
    sortedWords.forEach(word => {
        const wordDiv = document.createElement('div');
        wordDiv.textContent = word;
        wordContainer.appendChild(wordDiv);
    });
}