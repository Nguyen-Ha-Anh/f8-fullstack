import React from 'react';
import { AppBar, Toolbar, Typography, Box, Button, TextField, InputAdornment, IconButton, Avatar, Menu, MenuItem } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import AddIcon from '@mui/icons-material/Add';
import { useNavigate } from 'react-router-dom';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import { useState, useEffect } from 'react';

export default function Header() {
  const navigate = useNavigate();
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const [user, setUser] = useState(null)

  useEffect(() => {
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  const handleMenuClick = (event) => setAnchorEl(event.currentTarget);
  const handleClose = () => setAnchorEl(null);

  const handleLogout = () => {
    localStorage.removeItem('user');
    setUser(null);
    navigate('/');
  }

  return (
    <AppBar position="static" sx={{ background: 'white', color: 'black', boxShadow: 1 }}>
      <Toolbar sx={{ justifyContent: 'space-between' }}>
        
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
          <img src="/logo.png" alt="logo" style={{ height: 30 }} />
          <Typography variant="h6" fontWeight="bold">
            <span style={{ color: '#000' }}>BK</span>
            <span style={{ color: '#f9a825' }}>Star</span>
          </Typography>
          <Typography variant="body2" color="gray">Classroom</Typography>
        </Box>

        <Box sx={{ display: 'flex', gap: 2 }}>
          <Button variant="outlined" onClick={() => navigate('/create-class')}>
            + Tạo lớp
          </Button>

          <Button variant="text" onClick={() => navigate('/classes')}>
            <HomeOutlinedIcon/>
            Trang chủ
          </Button>

          <Box>
            <IconButton onClick={handleMenuClick}>
              <Avatar alt={user?.name || 'User'} src={user?.avatar} sx={{ width: 32, height: 32 }} />
            </IconButton>
            <Menu
              anchorEl={anchorEl}
              open={open}
              onClose={handleClose}
              anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
              transformOrigin={{ vertical: 'top', horizontal: 'right' }}
            >
              <MenuItem onClick={() => {
                handleClose();
                navigate('/profile');
              }}>
                Trang cá nhân
              </MenuItem>
              <MenuItem onClick={() => {
                handleClose();
                handleLogout()
              }}>
                Đăng xuất
              </MenuItem>
            </Menu>
          </Box>
        </Box>

      </Toolbar>
    </AppBar>
  );
}
