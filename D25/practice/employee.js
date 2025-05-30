export class Employee {
    #id
    #name
    #address

    constructor(id, name, address) {
        this.#id = id
        this.#name = name
        this.#address = address
    }

    getId() {
        return this.#id
    }

    getName() {
        return this.#name
    }

    getAddress() {
        return this.#address
    }

    setName(newName) {
        this.#name = newName
    }

    setAddress(newAddress) {
        this.#address = newAddress
    }

    toString() {
        return `Employee(id = ${this.#id}, name = ${this.#name}, address = ${this.#address})`
    }
}