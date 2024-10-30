/** Queremos crear una librería. Para ello, diseña una clase libro a 
través de un constructor, que contenga los atributos título, autor y 
año de publicación.

Diseña 2 métodos propios:

    mostrar_info: muestre el texto " 'Frankenstein' de Mary Shelley, 
    publicado en 1818.", donde "Frankenstein" es el título del libro, 
    'Mary Shelley' es la autora y 1818 el año de publicación. Las comillas
     que engloban el título del libro se deben mostrar en el mensaje.

    es_clasico: función que verifica si el libro es un clásico. 
    Para ello, utiliza el

Una vez creada la clase: 

a) Crea un objeto vacío. Rellena el título y la autora o autor.
b) Muestra su información y si es o no un clásico.
c) Muestra el objeto.
d) Modifica una propiedad del objeto.
e) Recorre las propiedades de objeto y muéstralas. */

let fecha = new Date();
let añoActual = fecha.getFullYear;

class Libro {
    constructor(title, author, year) {
        this.title = title;
        this.author = author;
        this.year = year;
    }

    mostrar_info(){
        console.log(`'${this.title}' de ${this.author}, publicado en ${this.year}.`)
    }
    es_clasico(){
        if (añoActual - this.year >= 50) {
            console.log("Sí es clásico.")
            return true;
        } else {
            console.log("No es clásico.")
            return false;
        }
    }
}
console.log("   A");
let libro = new Libro("Teo va a la escuela", "Yo", 2013);
console.log("Libro creado")
console.log("   B");
libro.mostrar_info();
console.log("   C");
libro.es_clasico();
console.log("   D");
console.log(libro);
console.log("   E");
libro.author = "Tu";
for (let prop in libro) {
    console.log(`${prop} = ${libro[prop]}`);
}