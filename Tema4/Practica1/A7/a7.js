let punto = {
    x: 0,
    _y: 0,
    _z: 0,
    cuadrante: 0,

    get y(){
        return this.x * 2;
    },

    set z(num){
        this._z = Math.sqrt(this.x * num);
    },
    get z(){
        return this._z;
    },

    get cuadrante(){
        if(this.x > 0 && this.y > 0) return 1;
        else if(this.x < 0 && this.y > 0) return 2;
        else if(this.x < 0 && this.y < 0) return 3;
        else if(this.x > 0 && this.y < 0) return 4;
        else return 0;
    },


    //En funcion arro wno hay contexto, por eso llamamos al objeto, punto, y no a this, this necesita contexto
    distancia: () => {
        console.log(Math.sqrt(Math.pow(punto.x, 2) + Math.pow(punto.y, 2)));
    },
    /*showDistancia: function() {
        const arrowFunction = () => {
            console.log("Punto x: " + this.x)
            console.log("Punto y: " + this.y)
            console.log("Distancia: " + Math.sqrt(Math.pow(this.x, 2) + Math.pow(this.y, 2)));
        }
        arrowFunction();
    }*/
}

punto.x = 5;
punto.distancia();

console.log("aaaaaaaaaaaaaa");
const json = JSON.stringify(punto, null, 2);
console.log(json);
