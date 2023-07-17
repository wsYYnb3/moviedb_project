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
    return data ? readUser(data.username) : null;
  });

  const login = (username, password) => {
    const user = readUser(username)
    if(!user) return false
    if(user.password!=password) return false

    localStorage.setItem('user', JSON.stringify(user));
    setCurrentUser(user);
    return true
  };

  const logout = () => {
    localStorage.removeItem('user');
    setCurrentUser(null);
  };

  const register = (username, password, sortOrder, favoriteGenre, voiceType, language) => {
    const user = {
      username,
      password,
      sortOrder,
      favoriteGenre,
      voiceType,
      language,
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
    if(id){
      delete data.history[id]
    } else {
      data.history = {}
    }
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
