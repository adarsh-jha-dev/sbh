import React from "react";
import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";

const AuthLayout = () => {
  const isAuthenticated = useSelector((state) => state.auth.status);

  if (isAuthenticated) {
    <Navigate to="/" />;
  }
  return (
    <div>
      <Outlet />
    </div>
  );
};

export default AuthLayout;
