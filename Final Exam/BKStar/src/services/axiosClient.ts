import axios from 'axios';
import Cookies from 'js-cookie';
import { jwtDecode } from 'jwt-decode';
import { logout } from './authService'; 

const API_BASE = 'https://b1u9y178ok.execute-api.ap-southeast-1.amazonaws.com';

interface DecodedToken {
  email: string;
  role: string;
  userId: string;
  exp?: number;
}

const axiosClient = axios.create({
  baseURL: API_BASE,
  headers: {
    'Content-Type': 'application/json',
  },
});

function isTokenExpiringSoon(token: string) {
  try {
    const decoded: DecodedToken = jwtDecode(token);
    const currentTime = Date.now() / 1000;
    return decoded.exp !== undefined && decoded.exp - currentTime < 60;
  } catch {
    return true;
  }
}

async function refreshAccessToken(): Promise<string> {
  const refreshToken = Cookies.get('refreshToken');
  if (!refreshToken) throw new Error('No refresh token');

  const res = await axios.post(`${API_BASE}/refresh`, { refreshToken });
  const newToken = res.data.accessToken;

  Cookies.set('accessToken', newToken, { expires: 1 / 96, secure: true, sameSite: 'strict' });
  return newToken;
}

axiosClient.interceptors.request.use(async (config) => {
  let token = Cookies.get('accessToken');

  if (token && isTokenExpiringSoon(token)) {
    try {
      token = await refreshAccessToken();
    } catch (err) {
      logout();
      window.location.href = '/login';
      throw err;
    }
  }

  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }

  return config;
});

export default axiosClient;
