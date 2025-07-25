import { useState } from "react"
import { useNavigate } from "react-router-dom"

export default function CreateClass() {
    const [name, setName] = useState('')
    const [members, setMembers] = useState('')
    const [tests, setTests] = useState('')

    const navigate = useNavigate()

    const handleCreate = () => {
        if (name && members && tests) {
            alert('class already exists')

            navigate('/class-list')
        } else {
            alert('enter full information')
        }
    }

    return (
        <Box sx={{ p: 3 }}>
            <Typography variant="h5" sx={{ mb: 3 }}>
                Tạo lớp học mới
            </Typography>

            <Paper elevation={3} sx={{ p: 3, maxWidth: 500 }}>
                <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
                    <TextField
                        label="Tên lớp học"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        fullWidth
                    />

                    <TextField
                        label="Số thành viên"
                        type="number"
                        value={members}
                        onChange={(e) => setMembers(e.target.value)}
                        fullWidth
                    />

                    <TextField
                        label="Số bài thi"
                        type="number"
                        value={tests}
                        onChange={(e) => setTests(e.target.value)}
                        fullWidth
                    />

                    <Button
                        variant="contained"
                        onClick={handleCreate}
                        sx={{ bgcolor: "#fcb600", color: "white", '&:hover': { bgcolor: '#e3a500' } }}
                    >
                        Tạo lớp học
                    </Button>
                </Box>
            </Paper>
        </Box>
    )
}