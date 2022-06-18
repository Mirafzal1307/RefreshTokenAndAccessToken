import React from "react";
import {  Redirect, Route } from "react-router-dom";

const RestrictedRoute = (props) => {
  const token = localStorage.getItem('accessToken');
  return <>{!token ? <Route {...props} /> : <Redirect to="/" />}</>;
};

export default RestrictedRoute;