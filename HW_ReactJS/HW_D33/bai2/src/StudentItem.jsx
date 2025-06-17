function StudentItem({student}) {
    return (
        <div style={{border: '1px solid #ccc', margin: '10px', padding: '10px'}}>
            <h3>{student.name}</h3>
            <p>Age: {student.age}</p>
            <p>Major: {student.major}</p>
        </div>
    )
}

export default StudentItem