import { students } from "../data/students"

function StudentItem({student}) {
    return (
        <>
        <li>
            <strong>{student.name}</strong>
            - {student.class}
            - {student.student}
        </li>
        </>
    )
}

export default StudentItem