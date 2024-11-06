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

    constructor(clientID, ) {}

}