import React, { useState, useEffect } from "react";
import {
  Avatar,
  Box,
  Grid,
  TextField,
  Typography,
  Button,
} from "@mui/material";

export default function ProfilePage() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    dob: "",
    currentPassword: "",
    newPassword: "",
    confirmPassword: "",
  });

  useEffect(() => {
    const currentUser = {
      name: "Tran Xuan Bang",
      email: "bangtran.hha@gmail.com",
      phone: "0909123456",
      dob: "2000-01-01",
    };
    setForm((prev) => ({
      ...prev,
      ...currentUser,
    }));
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <Box sx={{ maxWidth: 800, margin: "0 auto", padding: 4 }}>
      <Box sx={{ display: "flex", justifyContent: "center", mb: 3 }}>
        <Avatar sx={{ width: 100, height: 100 }}>A</Avatar>
      </Box>

      <Typography variant="h6" gutterBottom>
        Thông tin cá nhân
      </Typography>

      <Grid container spacing={2} mb={4}>
        <Grid item xs={12} sm={6}>
          <TextField
            fullWidth
            label="Họ và tên"
            name="name"
            value={form.name}
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            fullWidth
            label="Email"
            name="email"
            value={form.email}
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            fullWidth
            label="Số điện thoại"
            name="phone"
            value={form.phone}
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            fullWidth
            label="Ngày sinh"
            name="dob"
            type="date"
            InputLabelProps={{ shrink: true }}
            value={form.dob}
            onChange={handleChange}
          />
        </Grid>
      </Grid>

      <Typography variant="h6" gutterBottom>
        Đổi mật khẩu
      </Typography>

      <Grid container spacing={2} mb={4}>
        <Grid item xs={12} sm={6}>
          <TextField
            fullWidth
            label="Mật khẩu hiện tại"
            type="password"
            name="currentPassword"
            value={form.currentPassword}
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            fullWidth
            label="Mật khẩu mới"
            type="password"
            name="newPassword"
            value={form.newPassword}
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            fullWidth
            label="Xác nhận mật khẩu mới"
            type="password"
            name="confirmPassword"
            value={form.confirmPassword}
            onChange={handleChange}
          />
        </Grid>
      </Grid>

      <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
        <Button variant="contained" color="success">
          Cập nhật
        </Button>
      </Box>
    </Box>
  );
}
