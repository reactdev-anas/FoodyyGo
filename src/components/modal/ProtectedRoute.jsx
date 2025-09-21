import React from 'react';
import { Navigate } from 'react-router';

const ProtectedRoute = ({ children }) => {
  const isLogin = sessionStorage.getItem('loginDetail');

  if (!isLogin) {
    return <Navigate to="/" replace />;  // Redirect homepage if not logged in
  }

  return children;
};

export default ProtectedRoute;
