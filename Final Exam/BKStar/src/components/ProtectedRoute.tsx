import React from 'react';
import { Navigate } from 'react-router-dom';
import { jwtDecode } from 'jwt-decode';

interface ProtectedRouteProps {
  children: JSX.Element
}

interface JwtPayload {
  exp?: number;
  email: string;
  role: string;
  userId: string;
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ children }) => {
  const token = localStorage.getItem('accessToken');

  if (!token) {
    // khong co token - chuyen ve login
    return <Navigate to="/login" replace />;
  }

  try {
    const decoded = jwtDecode<JwtPayload>(token);

    // check  han su dung token
    if (decoded.exp && decoded.exp * 1000 < Date.now()) {
      // tokne het han
      localStorage.removeItem('token');
      return <Navigate to="/login" replace />;
    }

    // token hop le
    return children;
  } catch (error) {
    // token khong hop le
    localStorage.removeItem('token');
    return <Navigate to="/login" replace />;
  }
};

export default ProtectedRoute;
