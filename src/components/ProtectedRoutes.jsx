import React from "react";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
  const storedUser = JSON.parse(localStorage.getItem("user"));

  // If no user is found, redirect to login
  if (!storedUser) {
    return <Navigate to="/login" replace />;
  }

  return children; // Render the protected content
};

export default ProtectedRoute;
