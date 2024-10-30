let circulo = new Object();
//Declarmos su atributo
circulo.radius;
//Creamos su funcion
circulo.showArea = function(){
    return (Math.PI * (circulo.radius * circulo.radius)).toFixed(2);
}

//Comprobamos que funciona
circulo.radius = 7;
console.log(circulo.showArea(circulo.radius));