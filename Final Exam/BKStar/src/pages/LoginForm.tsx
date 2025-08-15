import React, { useState, useEffect } from 'react';
import {
  Box,
  TextField,
  Button,
  Typography,
  Checkbox,
  FormControlLabel,
} from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import { getEmailCookie, setEmailCookie, removeEmailCookie } from '../utils/cookie';

export default function LoginForm() {
  const { login } = useAuth();
  const navigate = useNavigate();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('')
  const [rememberMe, setRememberMe] = useState(false)

  const handleLogin = async () => {
    if (!email || !password) {
      setError('Vui lòng nhập đầy đủ thông tin');
      return;
    }
    try {
      await login(email, password);
      if (rememberMe) setEmailCookie(email);
      else removeEmailCookie();
      navigate('/classes');
    } catch (err) {
      console.error(err);
      setError('Đăng nhập thất bại');
    }
  }

  useEffect(() => {
    const savedEmail = getEmailCookie()
    if (savedEmail) {
      setEmail(savedEmail)
      setRememberMe(true)
    }
  }, [])

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
            <FormControlLabel
              control={
                <Checkbox
                  checked={rememberMe}
                  onChange={(e) => setRememberMe(e.target.checked)}
                />
              }
              label="Ghi nhớ tôi"
            />
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
