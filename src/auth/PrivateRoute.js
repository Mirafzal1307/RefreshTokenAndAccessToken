import React from "react";
import { Redirect } from "react-router-dom";
import TokenService from "../services/token.service";

const PrivateRoute = ({  children }) => {
  console.log(children , '-------------------------------children');
  const token = TokenService.getLocalAccessToken();
  // console.log(token);
  if (token) {
    return children;
  } else {
    return <Redirect to={token ? "/home" : "/login"}/>
  }
};

export default PrivateRoute;
