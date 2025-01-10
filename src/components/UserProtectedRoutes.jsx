import React from "react";
import { Navigate } from "react-router-dom";

const UserProtectedRoute = ({ children }) => {
  const storedUser = JSON.parse(localStorage.getItem("user"));

  // Redirect to login if user is found
  if (!storedUser) {
    return <Navigate to="/login" replace />;
  }

  return children; // Render the protected content if authenticated
};

export default UserProtectedRoute;
