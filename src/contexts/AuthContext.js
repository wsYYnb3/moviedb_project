import React, { createContext, useContext, useState } from 'react';

const AuthContext = createContext();

export const useAuth = () => {
  return useContext(AuthContext);
};

export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(() => {
    const user = localStorage.getItem('user');
    return user ? JSON.parse(user) : null;
  });

  const login = (username, password) => {
    const user = {
      username,
      password,
      sortOrder: 'popular',
      favoriteGenre: 12,
      voiceType: 'Spanish Female',
    };

    localStorage.setItem('user', JSON.stringify(user));
    setCurrentUser(user);
  };

  const logout = () => {
    localStorage.removeItem('user');
    setCurrentUser(null);
  };

  const register = (username, password, sortOrder, favoriteGenre, voiceType) => {
    const user = {
      username,
      password,
      sortOrder,
      favoriteGenre,
      voiceType,
    };

    localStorage.setItem(username, JSON.stringify(user));
  };

  const value = {
    currentUser,
    login,
    logout,
    register,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
