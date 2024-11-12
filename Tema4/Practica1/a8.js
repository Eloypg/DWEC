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
        this.id = Bill.billIdGenerator();
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

    addArticle(article) {
        this.articles.push(article);
    }

    showDetailedBill(){
        return `${super.showBill()}, Articulos: ${this.articles}`;
    }
}
class Articles {
    constructor (name, price) {
        this.name = name;
        this.price = price;
    }
}

let clientJuan = new Client("Juan", "juan@mail.com", 634567187);
let clientTeresa = new Client("Teresa", "teresa@mail.com", 655561231);
let clientLuis = new Client("Luis", "lui@mail.com", 602354322);

let billJuan = new Bill(clientJuan.id, 300);

console.log(billJuan.showBill());
billJuan.payBill();
console.log(billJuan.showBill());

let detailedBillJuan = new DetailedBill(clientJuan.id, billJuan.totalImport);
console.log(detailedBillJuan.showDetailedBill())
let article1 = new Articles("Estuche Azul", 10);
let article2 = new Articles("Estuche Rojo", 15);
let article3 = new Articles("Lápiz Gigante", 199.95);
detailedBillJuan.addArticle(article1);
detailedBillJuan.addArticle(article2);
detailedBillJuan.addArticle(article3);
console.log(detailedBillJuan.showDetailedBill());