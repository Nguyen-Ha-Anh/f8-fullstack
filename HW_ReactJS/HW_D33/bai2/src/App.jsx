import { useState } from 'react'
import StudentList from './StudentList'
import './App.css'

function App() {
  const [students, setSudents] = useState ([
      { id: 1, name: 'Nguyễn Văn An', age: 20, major: 'CNTT' },
      { id: 2, name: 'Lê Thị Bích', age: 21, major: 'Marketing' },
      { id: 3, name: 'Trần Quốc Cường', age: 22, major: 'Kế toán' }
  ])
  return (
    <>
      <h1>student list</h1>
      <StudentList students={students} />
    </>
  )
}

export default App
