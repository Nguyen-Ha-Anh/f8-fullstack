import { Employee } from "./employee.js";

const employees = []

const createEmployee = ({id, name, address}) => {
    employees.push(new Employee(id, name, address))
}

createEmployee({id: 1, name: 'test', address: 'address test'})

for(const emp of employees) {
    console.log(emp.toString())
}

