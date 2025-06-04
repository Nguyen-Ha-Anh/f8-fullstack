import { Base } from "./base.js";

export class Customer extends Base {
    #email;
    #phoneNumber

    constructor(id, name, email, phoneNumber) {
        super(id, name)
        this.#email = email
        this.#phoneNumber = phoneNumber
    }

    getEmail() {
        return this.#email
    }

    getPhoneNumber() {
        return this.#phoneNumber
    }

    setEmail(email) {
        this.#email = email
    }

    setPhoneNumber(phoneNumber) {
        this.#phoneNumber = phoneNumber
    }

    toString() {
        return `name: ${this.getName()}, email: ${this.#email}, phone: ${this.#phoneNumber}`
    }
}