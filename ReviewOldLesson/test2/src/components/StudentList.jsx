import { students } from "../data/students"
import StudentItem from "./StudentItem"

function StudentList() {
    return (
        <>
        <h1>Student List</h1>
        <ul>
            {students.map((student) => (
            <StudentItem key={student.id} student={student}/>
        ))}
        </ul>
        </>
    )
}

export default StudentList