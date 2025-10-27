import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';

const ProtectedRoute = () => {
  const currentUser = JSON.parse(localStorage.getItem('quiz_current_user'));

  // If authorized, return an outlet that will render child elements
  // If not, return element that will navigate to login page
  return currentUser ? <Outlet /> : <Navigate to="/" />;
};

export default ProtectedRoute;