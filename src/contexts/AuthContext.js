import React, { createContext, useContext, useState } from 'react';

const AuthContext = createContext();

export const useAuth = () => {
  return useContext(AuthContext);
};

export const AuthProvider = ({ children }) => {
  const readUser = (username) => {
    const user = localStorage.getItem(username)
    return user ? JSON.parse(user) : null
  }

  const [currentUser, setCurrentUser] = useState(() => {
    const user = localStorage.getItem('user');
    const data = user ? JSON.parse(user) : null
    return readUser(data.username);
  });

  const login = (username, password) => {
    const user = readUser(username)

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
      history: {}
    };

    localStorage.setItem(username, JSON.stringify(user));
  };

  const addToHistory = (user, id) => {
    const data = readUser(user.username)
    data.history[id] = 1
    localStorage.setItem(user.username, JSON.stringify(data));
  }

  const removeHistory = (user, id) => {
    const data = readUser(user.username)
    data.history = {}
    localStorage.setItem(user.username, JSON.stringify(data));
  }

  const value = {
    currentUser,
    login,
    logout,
    register,
    readUser,
    addToHistory,
    removeHistory
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
