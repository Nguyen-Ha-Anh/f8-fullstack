import { Customer } from './customer.js'
import { Product } from './product.js'
import { Order } from './order.js'

const c1 = new Customer(1, "Nguyễn Văn A", "a@gmail.com", "0909")

const p1 = new Product(1, "Laptop Dell", 25000000)
const p2 = new Product(2, "Chuột Logitech", 800000);

const o1 = new Order(101, c1, new Date("2025-06-04"));
o1.addProduct(p1)
o1.addProduct(p2)
