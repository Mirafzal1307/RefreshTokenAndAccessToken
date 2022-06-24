import React from "react";
import {  Redirect, Route } from "react-router-dom";
import TokenService from "../services/token.service";

const RestrictedRoute = (props) => {
  debugger;
  const token = TokenService.getLocalAccessToken();
  // console.log(token, '-------------------------------token');
  // console.log(token);
  return <>{!token ? <Route {...props} /> : <Redirect to="/" />}</>;
};

export default RestrictedRoute;
