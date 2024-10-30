class Circulo {
    constructor(){
        this.radius = document.getElementById("radius");
    }
    calcularArea() {
        return (Math.PI * Math.pow(this.radius, 2));
    }
    calcularPerimetro() {
        return (2 * Math.PI * this.radius);
    }
}

let circulo = new Circulo();
document.getElementById("button").addEventListener('click', function(){
    document.getElementById("areaResult").innerHTML() = circulo.calcularArea();
});
document.getElementById("button").addEventListener('click', function(){
    document.getElementById("perimetroResult").innerHTML() = circulo.calcularPerimetro();
})