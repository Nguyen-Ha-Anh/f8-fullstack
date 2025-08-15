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
    const [errors, setErrors] = useState({
      name: '',
      email: '',
      password: '',
      confirm: '',
      general: ''
    })

    const handleRegister = () => {
      let newErrors = { name: '', email: '', password: '', confirm: '', general: '' };
      let hasError = false;

      if (!name) {
        newErrors.name = 'Vui lòng nhập tên của bạn';
        hasError = true;
      }
      if (!email) {
        newErrors.email = 'Vui lòng nhập email';
        hasError = true;
      }
      if (!password) {
        newErrors.password = 'Vui lòng nhập mật khẩu';
        hasError = true;
      }
      if (!confirm) {
        newErrors.confirm = 'Vui lòng nhập lại mật khẩu';
        hasError = true;
      } else if (password !== confirm) {
        newErrors.confirm = 'Mật khẩu nhập lại không khớp';
        hasError = true;
      }

      if (hasError) {
        setErrors(newErrors);
        return;
      }

      setErrors({ name: '', email: '', password: '', confirm: '', general: '' });

      fetch('https://b1u9y178ok.execute-api.ap-southeast-1.amazonaws.com/master/user/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          name,
          email,
          password,
          role: 'student',
          status: 'confirming'
        })
      })
      .then(response => {
        if (!response.ok) {
          throw new Error('Email đã tồn tại hoặc có lỗi xảy ra');
        }
        return response.json();
      })
      .then(data => {
        alert('Đăng ký thành công, vui lòng đăng nhập!');
        navigate('/');
      })
      .catch(err => {
        setErrors(prev => ({ ...prev, general: err.message || 'Có lỗi xảy ra khi đăng ký' }));
      })
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
          error={!name && errors.name}
          helperText={!name && errors.name}
        />
        <TextField
          label="Địa chỉ email *"
          fullWidth
          margin="normal"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          error={!!errors.email}
          helperText={errors.email}
        />
        <TextField
          label="Mật khẩu *"
          fullWidth
          margin="normal"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          error={!!errors.password}
          helperText={errors.password}
        />
        <TextField
          label="Nhập lại mật khẩu *"
          fullWidth
          margin="normal"
          type="password"
          value={confirm}
          onChange={(e) => setConfirm(e.target.value)}
          error={!!errors.confirm}
          helperText={errors.confirm}
        />

        {errors.general && (
          <Typography color="error" mt={1} mb={2}>
            {errors.general}
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