import React from "react";
import { Navigate } from "react-router-dom";

function ProtectedRoute({ children, allowed }) {
  if (allowed) {
    return children;
  }
  return <Navigate to="/" />;
}

export default ProtectedRoute;
