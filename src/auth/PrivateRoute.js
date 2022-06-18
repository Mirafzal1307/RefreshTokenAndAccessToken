import React from "react";
import { Redirect } from "react-router-dom";

const PrivateRoute = ({  children }) => {
  const token = localStorage.getItem("accessToken");
  if (token) {
    return children
  } else {
    return <Redirect to={token ? "/home" : "/login"}/>
  }
};

export default PrivateRoute;