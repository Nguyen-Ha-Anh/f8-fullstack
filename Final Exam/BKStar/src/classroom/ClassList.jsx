import { Box, Typography, Grid, Card, CardContent, TextField, Button, InputAdornment } from "@mui/material"
import Header from '../components/Header'
import SearchIcon from '@mui/icons-material/Search'
import AddIcon from '@mui/icons-material/Add'
import { useNavigate } from "react-router-dom"

const classes = [
    {id: 1, name: 'Lớp A', members: 20, tests: 5},
    {id: 2, name: 'Lớp B', members: 21, tests: 3},
    {id: 3, name: 'Lớp C', members: 22, tests: 6},
]

export default function ClassList() {
    const navigate = useNavigate()
    return (
        <>
            <Header />
            <Box sx={{ p: 3 }}>

            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2 }}>
                <Typography variant="h5">Danh sách lớp học</Typography>
            
                <Box sx={{ display: 'flex', gap: '10px'}}>
                    <TextField
                        size="small"
                        placeholder="Tìm kiếm"
                        sx={{ width: '300px'}}
                        InputProps={{
                            startAdornment: (
                                <InputAdornment position="start">
                                <SearchIcon />
                                </InputAdornment>
                            )
                        }}
                    />

                    <Button
                        variant="contained"
                        startIcon={<AddIcon />}
                        onClick={() => navigate('/create-class')}
                        sx={{ bgcolor: '#fcb600', color: 'white', '&:hover': { bgcolor: '#e3a500' } }}
                    >
                        Thêm lớp học
                    </Button>
                </Box>

            </Box>
                <Grid container spacing={3}>
                    {classes.map((cls) => (
                    <Grid item xs={12} md={6} key={cls.id}>
                        <Card>
                        <CardContent>
                            <Typography variant="h6">{cls.name}</Typography>
                            <Typography>Số thành viên: {cls.members}</Typography>
                            <Typography>Số bài thi: {cls.tests}</Typography>
                        </CardContent>
                        </Card>
                    </Grid>
                    ))}
                </Grid>
            </Box>
        </>
    )
}