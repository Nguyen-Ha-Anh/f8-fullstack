const employees = [
    { id: 1, name: "Alice", age: 23, status: 'working' },
    { id: 2, name: "Bob", age: 25, status: 'working' },
    { id: 3, name: "Charlie", age: 27, status: 'working' },
    { id: 4, name: "David", age: 23, status: 'quited' },
    { id: 5, name: "Eve", age: 20, status: 'working' },
];

const products = [
    { id: 1, name: "Phone", price: 1200 },
    { id: 2, name: "Laptop", price: 3000  },
    { id: 3, name: "Tab", price: 2000  },
    { id: 4, name: "PC", price: 800  },
    { id: 5, name: "Monitor", price: 1500  },
]

const orders = [
    { id: 1, employeeId: 1, productId: 4, quantity: 1 },
    { id: 2, employeeId: 2, productId: 2, quantity: 4 },
    { id: 3, employeeId: 1, productId: 5, quantity: 1 },
    { id: 4, employeeId: 3, productId: 1, quantity: 2 },
    { id: 5, employeeId: 2, productId: 5, quantity: 3 },
    { id: 5, employeeId: 4, productId: 1, quantity: 1 },
    { id: 5, employeeId: 5, productId: 3, quantity: 2 },
];

// Bai 1
const workingEmployees = employees.filter(employee => employee.status === 'working')
console.log(workingEmployees)

// Bai 2
const oldEmployees = employees[0] 

for (i = 1; i < employees.length; i++) {
    if (employees[i].age > oldEmployees.age) {
        employees[i] = oldEmployees;
    }
}

console.log(oldEmployees)

// Bai 3
const cheapProducts = products.reduce(function(name, price) {
    return (price < name) ? price : name 
})

console.log(cheapProducts)

// Bai 4
// const bestSeller = orders[0]
//     for (let i = 0; i < orders.length; i++) {
        
//     }
const bestSeller = 0







    