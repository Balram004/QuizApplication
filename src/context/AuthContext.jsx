import React, { createContext, useContext, useState, useEffect } from "react";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(() => {
    // Initialize user from localStorage on initial load
    const savedUser = localStorage.getItem('quiz_current_user');
    return savedUser ? JSON.parse(savedUser) : null;
  });

  const login = (userData) => {
    localStorage.setItem('quiz_current_user', JSON.stringify(userData));
    setUser(userData);
  };
  const logout = () => {
    localStorage.removeItem('quiz_current_user');
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
