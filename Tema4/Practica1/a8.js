class Client {

    static #id = 1;

    constructor(name, email, tlf) {
        this.id = Client.#id++;
        this.name = name;
        this.email = email;
        this.tlf = tlf;
    }

    showClient(){
        return `${this.name}, email: ${this.email}, tlf: ${this.tlf}`;
    }

}
class Bill {

    static #id = 1;

    constructor(clientID, totalImport, isPaid) {
        this.id = Bill.#id++;
        this.clientID = clientID;
        this.totalImport = totalImport;
        this.isPaid = isPaid;
    }

    showBill(){
        return `ID del cliente: ${this.clientID}, Importe total de la factura: ${this.totalImport}€, Estado: ${this.isPaid}`
    }

    payBill(){
        if (!this.isPaid) {
            this.isPaid = true;
            console.log(`Factura con id: ${Bill.#id} está pagada.`)
        } else {
            console.log(`Esta factura ya esta pagada`)
        }
    }

}