class Circulo {
    constructor(){
        this.radiusElement = document.getElementById("radius");
    }
    calcularArea() {
        const radius = Number(this.radiusElement.value);
        return Math.PI * Math.pow(radius, 2);
    }
    calcularPerimetro() {
        const radius = Number(this.radiusElement.value);
        return 2 * Math.PI * radius;
    }
}

let circulo = new Circulo();
document.getElementById("button").addEventListener('click', function(){
    document.getElementById("areaResult").innerHTML = `Área: ${circulo.calcularArea().toFixed(2)}`;
    document.getElementById("perimetroResult").innerHTML = `Perímetro: ${circulo.calcularPerimetro().toFixed(2)}`;
});
