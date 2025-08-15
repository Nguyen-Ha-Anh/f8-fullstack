import { useState } from "react"
import { useNavigate } from "react-router-dom"
import Header from "../components/Header"
import { Box, Typography, TextField, Button, Paper, Stack} from '@mui/material'

export default function CreateClass() {
    const [className, setClassName] = useState('')
    const [code, setCode] = useState('')
    const navigate = useNavigate()

    const handleCreate = () => {
        if (!className || !code) {
            alert('class created successfully')
            return
        }
        const newClassId = 'abc123'
        navigate(`/class/${newClassId}`)

        // TODO: alert(`created class '${className}' with code '${code}'`)
        // navigate('/classes')

        alert(`created class '${className}' with code '${code}'`)
    }

    return (
        <>
        <Header />
        <Box sx={{ p: 4, backgroundColor: "#f8f9fc", minHeight: "100vh" }}>
            <Typography variant="h6" sx={{ mb: 3 }}>
            <b>Thêm lớp học mới</b>
            </Typography>

            <Paper
            elevation={2}
            sx={{
                maxWidth: 400,
                mx: "auto",
                p: 4,
                borderRadius: 3,
            }}
            >
            <Stack spacing={2}>
                <Typography variant="body1" fontWeight={600}>
                    Tên lớp học <span style={{ color: "red" }}>*</span>
                </Typography>
                <TextField
                placeholder="Nhập tên lớp học"
                value={className}
                onChange={(e) => setClassName(e.target.value)}
                required
                fullWidth
                variant="outlined"
                />
                <Typography variant="body1" fontWeight={600}>
                    Mã bảo vệ <span style={{ color: "red" }}>*</span>
                </Typography>
                <TextField
                placeholder="Nhập mã bảo vệ"
                value={code}
                onChange={(e) => setCode(e.target.value)}
                required
                fullWidth
                />

                <Stack direction="row" justifyContent="center" spacing={2} mt={2}>
                <Button variant="outlined" onClick={() => navigate("/classes")}>
                    Hủy
                </Button>
                <Button variant="contained" onClick={handleCreate}>
                    Tạo mới
                </Button>
                </Stack>
            </Stack>
            </Paper>
        </Box>
        </>
    )
}