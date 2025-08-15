import React, { createContext, useContext, useState, useEffect } from 'react';
import { login as loginService, logout as logoutService, getAccessToken } from '../services/authService';
import { jwtDecode } from 'jwt-decode';

type User = {
  email: string;
  role: string;
  userId: string;
} | null;

interface DecodedToken {
  email: string;
  role: string;
  userId: string;
  exp?: number;
}

interface AuthContextProps {
  user: User;
  isLoggedIn: boolean;
  login: (email: string, password: string) => Promise<void>;
  logout: () => void;
}

const AuthContext = createContext<AuthContextProps | undefined>(undefined);

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<User>(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const token = getAccessToken();
    if (token) {
      try {
        const decoded = jwtDecode<DecodedToken>(token);
        setUser(decoded);
        setIsLoggedIn(true);
      } catch (err) {
        console.error('Token không hợp lệ:', err);
        logout();
      }
    }
  }, [])

  interface LoginResponse {
    accessToken: string;
  }

  const login = async (email: string, password: string): Promise<void> => {
    try {
      const tokenData = await loginService(email, password);
      console.log("Token server trả về:", tokenData);

      const token =
        typeof tokenData === "string" ? tokenData : tokenData.accessToken;

      if (!token) {
        console.error("Không có token từ server")
        throw new Error("Token không hợp lệ")
      }

      localStorage.setItem("token", token)

      const decoded = jwtDecode<DecodedToken>(token)
      console.log("Token decode:", decoded)

      setUser(decoded)
      setIsLoggedIn(true)
      localStorage.setItem('accessToken', token)
    } catch (err) {
      console.error("Lỗi đăng nhập:", err)
      throw new Error("Đăng nhập thất bại")
    }
  };



  const logout = () => {
    logoutService();
    setUser(null);
    setIsLoggedIn(false);
    localStorage.removeItem('accessToken');
  };

  return (
    <AuthContext.Provider value={{ user, isLoggedIn, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) throw new Error("useAuth must be used within an AuthProvider");
  return context;
};
