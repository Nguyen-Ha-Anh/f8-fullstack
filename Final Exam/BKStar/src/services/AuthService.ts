import axios from 'axios';
import Cookies from 'js-cookie';
import { jwtDecode } from 'jwt-decode';

const API_BASE = 'https://b1u9y178ok.execute-api.ap-southeast-1.amazonaws.com'

interface DecodedToken {
  email: string;
  role: string;
  userId: string;
  exp?: number;
}

export const login = async (email: string, password: string) => {
  try {
    const res = await axios.post(`${API_BASE}/login/`, { email, password });

    const { access, refresh } = res.data;
    if (!access || !refresh) {
      throw new Error("Login API không trả về token hợp lệ");
      console.log(res.data);
    }

    Cookies.set('access', access, { expires: 1 / 96, secure: true, sameSite: 'strict' });
    Cookies.set('refresh', refresh, { expires: 7, secure: true, sameSite: 'strict' });

    const user = jwtDecode<DecodedToken>(access);
    return user;
  } catch (err) {
    console.error("Login error:", err);
    throw err;
  }
};

export const logout = () => {
  Cookies.remove('accessToken');
  Cookies.remove('refreshToken');
};

export const getAccessToken = () => Cookies.get('accessToken');

interface RegisterPayload {
  name: string;
  email: string;
  password: string;
  role?: string;
  status?: string;
}

export const register = async (data: RegisterPayload) => {
  const res = await axios.post(`${API_BASE}/master/user/`, {
    ...data,
    role: data.role || 'student',
    status: data.status || 'confirming'
  });
  return res.data;
};
