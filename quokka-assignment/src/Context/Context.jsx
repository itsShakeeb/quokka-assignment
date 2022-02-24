import React, { createContext, useState } from "react";

export const AppContext = createContext(null);

export const ContextWrapper = (props) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const loginStatus = () => {
    return JSON.parse(localStorage.getItem("isLoggedIn"));
  };

  const login = async (email, callback) => {
    try {
      localStorage.setItem("isLoggedIn", JSON.stringify(true));
      localStorage.setItem("email", JSON.stringify(email));
      callback(true, "Succesfully logged in");
    } catch (error) {
      callback(false, "");
    }
  };

  const handleLogout = () => {
    localStorage.clear();
    window.location.href = "/login";
  };

  const value = {
    isLoggedIn,
    login,
    loginStatus,
    handleLogout,
  };
  return (
    <AppContext.Provider value={value}>{props.children}</AppContext.Provider>
  );
};
