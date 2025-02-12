import React, { useEffect } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { useProduct } from "../context/ProductContextProvider";

export default function PrivateRoute({ children }) {
  const { isAdmin } = useProduct();

  if (!isAdmin) {
    const check = localStorage.getItem("isChecked");
    if (!check) {
      return <Navigate to="/loginadmin" />;
    }
  }

  return children;
}
