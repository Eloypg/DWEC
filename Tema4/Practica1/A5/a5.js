class Counter {
    constructor() {
        this.counter = 0;
    }
    incrementar() {
        this.counter = this.counter + 1;
    }
    mostrar() {
        return this.counter;  // Retorna el valor del contador
    }
}

let counter = new Counter();
let button = document.getElementById("button");
let clickSound = document.getElementById("click-sound"); // Obtener el elemento de audio

button.addEventListener("click", function() {
    counter.incrementar();
    document.getElementById("result").innerHTML = counter.mostrar();  // Asigna el valor retornado
    clickSound.play(); // Reproduce el sonido al hacer clic
});
