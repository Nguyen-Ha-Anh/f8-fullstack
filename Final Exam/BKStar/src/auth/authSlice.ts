import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { clearTokens, setEmailCookie } from '../utils/cookie';

export const login = createAsyncThunk('auth/login', async (data) => {
  const res = await login(data);
  return res.data;
});

export const logout = createAsyncThunk('auth/logout', async (_, { getState }) => {
  const state: any = getState();
  const email = state.auth.user?.email;
  if (email) {
    setEmailCookie(email);
  }
  clearTokens();
});

const authSlice = createSlice({
  name: 'auth',
  initialState: { user: null },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(login.fulfilled, (state, action) => {
      state.user = action.payload.user;
    });
    builder.addCase(logout.fulfilled, (state) => {
      state.user = null;
    });
  },
});

export default authSlice.reducer;
