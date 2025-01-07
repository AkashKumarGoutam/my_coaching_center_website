import React, { createContext, useState, useEffect } from "react";

// Create a context
export const UserContext = createContext();

// UserProvider component to wrap the app
export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    // Check if user data exists in localStorage and set it to state
    const storedUser = JSON.parse(localStorage.getItem("user"));
    if (storedUser) {
      setUser(storedUser);
    }
  }, []);

  // Function to log out and clear the user from state and localStorage
  const logout = () => {
    localStorage.removeItem("user");
    setUser(null);
  };

  return (
    <UserContext.Provider value={{ user, setUser, logout }}>
      {children}
    </UserContext.Provider>
  );
};
