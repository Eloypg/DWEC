function equalWords(word1, word2){
    let areEquals = false;
    //Comprueba que sean de misma longitud primero
    if(word1.length == word2.length){
        //Separa los strings por elementos
        let word1Array = word1.split("");
        let word2Array = word2.split("");
        //Comprueba si tienen los mismos elementos y si son iguales
        if (word1Array.sort().join() == word2Array.sort().join()) {
            areEquals = true;
            console.log("Las palabras son iguales")
        }

    } else (
        console.log("Si las palabras tienen distinta longitud es imposible que sean iguales.")
    )
    return areEquals;
}
console.log(equalWords("francisco", "paco"))
console.log(equalWords("francisco", "ocsicnarf")) 