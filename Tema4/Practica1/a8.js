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

    static billIdGenerator(){
        return Bill.#id++;
    }

    constructor(clientID, totalImport) {
        this.id = billIdGenerator();
        this.clientID = clientID;
        this.totalImport = totalImport;
        this.isPaid = "Pendiente";
    }

    showBill(){
        return `ID del cliente: ${this.clientID}, Importe total de la factura: ${this.totalImport}€, Estado: ${this.isPaid}`
    }

    payBill(){
        if (this.isPaid === "Pendiente") {
            this.isPaid = "Pagada";
            console.log(`Has pagado la factura con id: ${Bill.#id} con éxito.`)
        } else {
            console.log(`Esta factura ya esta pagada`)
        }
    }

}
class DetailedBill extends Bill {
    constructor(clientID, totalImport) {
        super(clientID, totalImport);
        this.articles = [];
    }
}

let clientJuan = new Client("Juan", "juan@mail.com", 634567187);
let clientTeresa = new Client("Teresa", "teresa@mail.com", 655561231);
let clientLuis = new Client("Luis", "lui@mail.com", 602354322);

let billJuan = new Bill(clientJuan.id, 300);

console.log(billJuan.showBill());
billJuan.payBill();
console.log(billJuan.showBill());
