import React from "react";
import { Navigate, Outlet } from "react-router-dom";

function UserPrivateRoute() {
  const user = JSON.parse(localStorage.getItem("user"));

  return user && user.role === "user" ? <Outlet /> : <Navigate to="/login" />;
}

export default UserPrivateRoute;
