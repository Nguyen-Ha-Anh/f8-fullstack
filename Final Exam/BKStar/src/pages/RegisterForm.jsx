import { useState } from "react"
import {
    Box, 
    TextField,
    Button,
    Typography
} from '@mui/material'
import { useNavigate } from "react-router-dom"

export default function RegisterForm() {
    const navigate = useNavigate()

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirm, setConfirm] = useState('')
    const [error, setError] = useState('')

    const handleRegister = () => {
        if (!name || !email || !password || !confirm) {
            setError('enter full information')
            return 
        }
        if ( password !== confirm) {
            setError('incorrect password')
            return
        }
        setError('') 
        console.log({name, email, password})
        navigate('/')
    }
    
    return (
    <Box
        sx={{
        minHeight: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#f0f2f5',
      }}
    >
      <Box
        sx={{
          width: '100%',
          maxWidth: 500,
          backgroundColor: 'white',
          padding: 4,
          borderRadius: 3,
          boxShadow: 3,
        }}
      >
        <Box textAlign="center" mb={3}>
          <Typography variant="h4" fontWeight="bold">
            <span style={{ color: '#000' }}>BK</span>
            <span style={{ color: '#f9a825' }}>Star</span>
          </Typography>
          <Typography variant="h5" mt={1}>
            Đăng kí học viên
          </Typography>
        </Box>

        <TextField
          label="Tên của bạn *"
          fullWidth
          margin="normal"
          value={name}
          onChange={(e) => setName(e.target.value)}
          error={!name && error}
          helperText={!name && error ? 'Vui lòng nhập tên của bạn' : ''}
        />
        <TextField
          label="Địa chỉ email *"
          fullWidth
          margin="normal"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <TextField
          label="Mật khẩu *"
          fullWidth
          margin="normal"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <TextField
          label="Nhập lại mật khẩu *"
          fullWidth
          margin="normal"
          type="password"
          value={confirm}
          onChange={(e) => setConfirm(e.target.value)}
        />

        {error && (
          <Typography color="error" mt={1} mb={2}>
            {error}
          </Typography>
        )}

        <Box display="flex" justifyContent="space-between" mt={3}>
          <Button
            variant="outlined"
            color="secondary"
            onClick={() => navigate('/')}
          >
            Hủy
          </Button>
          <Button
            variant="contained"
            sx={{ backgroundColor: '#1976d2' }}
            onClick={handleRegister}
          >
            Đăng ký
          </Button>
        </Box>
      </Box>
    </Box>
    )
}