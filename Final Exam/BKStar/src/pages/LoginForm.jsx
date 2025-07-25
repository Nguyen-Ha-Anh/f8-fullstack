import React, { useState } from 'react';
import {
  Box,
  TextField,
  Button,
  Typography,
  Checkbox,
  FormControlLabel,
} from '@mui/material';
import { useNavigate } from 'react-router-dom';

export default function LoginForm() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const navigate = useNavigate()

  const VALID_EMAIL = 'bangtran.hha@gmail.com'
  const VALID_PASSWORD = 'Bangtx@123'

  const handleLogin = () => {
    if (!email || !password) {
      setError('please enter full information')
      return
    }
    if (email === VALID_EMAIL && password === VALID_PASSWORD) {
      localStorage.setItem('isLoggedIn', 'true')
      navigate('/classes')
    } else {
      setError('incorrect email or password')
    }
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
          display: 'flex',
          width: '100%',
          maxWidth: 1000,
          height: 550,
          borderRadius: 3,
          boxShadow: 3,
          overflow: 'hidden',
          backgroundColor: 'white',
        }}
      >
        <Box
          sx={{
            width: '50%',
            backgroundColor: '#1976d2',
            color: 'white',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            padding: 4,
          }}
        >
          <img
            src="/steam-logo.png"
            alt="STEAM"
            style={{ maxWidth: '70%', marginBottom: 20 }}
          />
          <Typography variant="h6" align="center">
            GIEO MẦM SÁNG TẠO... <br /> ... DẪN HƯỚNG ĐAM MÊ
          </Typography>
        </Box>

        <Box
          sx={{
            width: '50%',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            padding: 4,
          }}
        >
          <Box
            sx={{
              width: '100%',
              maxWidth: 400,
              textAlign: 'center',
            }}
          >
            <Typography variant="h4" fontWeight="bold" mb={1}>
              <span style={{ color: '#000' }}>BK</span>
              <span style={{ color: '#f9a825' }}>Star</span>
            </Typography>

            <Typography variant="subtitle1" mb={2}>
              Đăng nhập
            </Typography>

            {error && (
              <Typography color='error' mb={1}>{error}</Typography>
            )}

            <TextField 
              label="Nhập email *" 
              fullWidth 
              margin="normal"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <TextField
              label="Nhập mật khẩu *"
              fullWidth
              type="password"
              margin="normal"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <FormControlLabel control={<Checkbox />} label="Ghi nhớ tôi" />

            <Button
              variant="contained"
              fullWidth
              onClick={handleLogin}
              sx={{ mt: 2, mb: 1, backgroundColor: '#1976d2' }}
            >
              ĐĂNG NHẬP
            </Button>

            <Typography
              variant="body2"
              sx={{ color: '#1976d2', cursor: 'pointer' }}
              onClick={() => navigate('/register')}
            >
              ĐĂNG KÍ TÀI KHOẢN CHO HỌC VIÊN
            </Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
