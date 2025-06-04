export class Order {
    #id
    #customer
    #products
    #orderDate
  
    constructor(id, customer, orderDate = new Date()) {
      this.#id = id
      this.#customer = customer
      this.#products = []
      this.#orderDate = orderDate
    }
  
    getId() { return this.#id }
    getCustomer() { return this.#customer }
    getOrderDate() { return this.#orderDate }
    getProducts() { return this.#products }
  
    addProduct(product) {
      this.#products.push(product)
    }
  
    removeProduct(productId) {
      const idx = this.#products.findIndex(p => p.getId() === productId)
      if (idx !== -1) this.#products.splice(idx, 1)
    }
  
    calculateTotal() {
      return this.#products.reduce((sum, p) => sum + p.getPrice(), 0)
    }
  
    toString() {
      return `Đơn hàng #${this.#id}, khách hàng: ${this.#customer.getName()}, `
           + `ngày đặt: ${this.#orderDate.toLocaleDateString('vi-VN')}`
    }
  }
  