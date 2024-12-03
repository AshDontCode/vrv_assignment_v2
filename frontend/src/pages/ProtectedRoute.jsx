import React from "react";
import { Navigate } from "react-router-dom";
import { isAuthenticated, getUserRole } from "../utils/auth";

const ProtectedRoute = ({ component: Component, role }) => {
  const isLoggedIn = isAuthenticated();
  const userRole = getUserRole();

  if (!isLoggedIn) {
    return <Navigate to="/login" />;
  }

  if (role && userRole !== role) {
    return <Navigate to="/not-authorized" />;
  }

  return <Component />;
};

export default ProtectedRoute;
