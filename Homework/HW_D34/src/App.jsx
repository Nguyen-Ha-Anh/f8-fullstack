import './App.css'
import {FTable, EmployeeDialog, ConfirmDeleteDialog, DialogContainer} from './components'
import {Button, DialogContent, DialogTitle, Dialog, TextField, DialogActions} from "@mui/material";
import {useState} from "react";

const initEmployee = {
  id: null, name: null, age: null, address: null
}

function App() {
  const [isOpenDialog, setIsOpenDialog] = useState(false)
  const [isOpenConfirmDeleteDialog, setIsOpenConfirmDeleteDialog] = useState(false)

  const [curEmployee, setCurEmployee] = useState({
    id: null, name: null, age: null, address: null
  })

  const columns = [
    { name: 'id', text: 'Id'},
    { name: 'name', text: 'Name'},
    { name: 'age', text: 'Age'},
    { name: 'address', text: 'Address'},
    { name: 'action', text: ''},
  ]
  const employees = [
    {id: 1, name: 'viet', age: 23, address: '123/3 đường Lê Lợi, phường Bến Nghé, Quận 1, Thành phố Hồ Chí Minh'},
    {id: 2, name: 'viet nam', age: 23, address: '123/5B đường Lê Lợi, Phường 6, thành phố Tuy Hòa, tỉnh Phú Yên'},
    {id: 3, name: 'nam viet', age: 23, address: '123/5B đường Lê Lợi, Phường 6, thành phố Tuy Hòa, tỉnh Phú Yên'}
  ]

  const onEdit = (employee) => {
    const newEmployee = { ...employee }
    setCurEmployee(newEmployee)
    console.log('test', newEmployee)
    setIsOpenDialog(true)
  }
  const onCreate = () => {
    setCurEmployee(initEmployee)
    setIsOpenDialog(true)
  }

  const onSave = (data) => {
    if (!data.name || !data.age || !data.address) {
      alert('nhap du thong tin')
      return
    }

    if (data.id) {
      const update = employees.map(emp => emp.id === employee.id ? employee : emp)
      setEmployee(update)
    } else {
      const newId = employees.length > 0 ? Math.max(...employees.map(emp => emp.id)) + 1 : 1
      const newEmployee = { ...data, id: newId }
      setEmployees([...employees, newEmployee])
    }
    setIsOpenDialog(false)
  }

  const onDelete = (id) => {
    const newList = employees.filter(emp => emp.id !== id)
    setEmployees(newList)
  }

  console.log('reload main screen')

  return (
    <>
      <FTable columns={columns} rows={employees} onEdit={onEdit} onDelete={onDelete}/>
      <Button variant="outlined" onClick={onCreate}>Add new</Button>
      <EmployeeDialog
        isOpen={isOpenDialog}
        setIsOpen={setIsOpenDialog}
        employee={curEmployee}
        setEmployee={setCurEmployee}
        onSave={onSave}
      />
    </>
  )
}

export default App