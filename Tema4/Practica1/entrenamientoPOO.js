class Vehiculo {
    constructor(marca, modelo, añoFabricacion, precio){
        this.marca = marca;
        this.modelo = modelo;
        this.añoFabricacion = añoFabricacion;
        this.precio = precio;
    }

    mostrarDetalles() {
        return `${this.marca} ${this.modelo}, año ${this.añoFabricacion}, ${this.precio}€`;
    }
}
class Coche extends Vehiculo {
    constructor(marca, modelo, añoFabricacion, precio, numPuertas){
        super(marca, modelo, añoFabricacion, precio);
        this.numPuertas = numPuertas;
    }
    mostrarDetalles(){
        return `${super.mostrarDetalles()}, ${this.numPuertas} puertas`;
    }
    
}
class Moto extends Vehiculo {
    constructor(marca, modelo, añoFabricacion, precio, manillar){
        super(marca, modelo, añoFabricacion, precio);
        this.manillar = manillar;
    }
    mostrarDetalles(){
        return super.mostrarDetalles() + `, manillar ${this.manillar}`;
    }
}
class Concesionario {
    constructor () {
        this.listaVehiculos = [];
    }
    aniadirVehiculo(vehiculo){
        this.listaVehiculos.push(vehiculo);
    }
    mostrarListado(){
        for(let i = 0; i < this.listaVehiculos.length; i++) {
            console.log(this.listaVehiculos[i].mostrarDetalles());
        }
    }
}

let concesionario = new Concesionario();
concesionario.aniadirVehiculo((new Coche("Seat", "Ibiza", 2002, 0, 4)));
concesionario.aniadirVehiculo((new Moto("Yamaha", "Neos", 2000, 9999, "to guapo")));
concesionario.aniadirVehiculo((new Coche("Cars", "Rayo", 2005, 10, 2)));
concesionario.aniadirVehiculo((new Moto("Moto", "Motomami", 2021, 2999, "motomami")));
concesionario.mostrarListado();

