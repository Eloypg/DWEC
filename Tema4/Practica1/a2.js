/** Crea un objeto literal película, utilizando la forma 2 y this.
De la película conocemos que su título es "Inception", su director es
 "Christopher Nolan", el año es "2010" y su género es "Ciencia Ficción".

Diseña la función propia del objeto mostrar_informacion que, para dichos 
datos, muestre por pantalla el mensaje:
Inception es una película dirigida por Christopher Nolan, lanzada en 2010,
 del género Ciencia Ficción. */

 let pelicula = {
    title: "Inception",
    director: "Christopher Nolan",
    year: 2010,
    gender: "Ciencia Ficción",

    mostrar_informacion: function(){
        console.log(`${this.title} es una película dirigida por ${this.director}, lanzada en ${this.year}, del género ${this.gender}.`);
    }
 }

 pelicula.mostrar_informacion();