class Punto2D {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }

    mostrar() {
        return `(${this.x}, ${this.y})`;
    }

}

class Recta extends Punto2D {
    constructor (pX, pY, x, y) {
        punto = super(pX, pY);
        punto2 = super(x, y);
    }

    get longitud() {
        let tX = this.pX - this.x;
        let tY = this.pY - this.y;
        return Math.sqrt((tX ** 2) + (tY ** 2));
    }
}