import React from "react";
import { Navigate, Outlet } from "react-router-dom";

function PrivateComponent() {
  const user = JSON.parse(localStorage.getItem("user"));

  return user && user.role === "admin" ? <Outlet /> : <Navigate to="/adminlayout" />;

}

export default PrivateComponent;

