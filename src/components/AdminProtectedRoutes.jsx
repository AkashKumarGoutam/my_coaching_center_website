import React from "react";
import { Navigate } from "react-router-dom";

const AdminProtectedRoute = ({ children }) => {
  const storedAdmin = JSON.parse(localStorage.getItem("admin"));

  // Redirect to login if admin is found
  if ( !storedAdmin) {
    return <Navigate to="/login" replace />;
  }

  return children; // Render the protected content if authenticated
};

export default AdminProtectedRoute;
