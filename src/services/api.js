import axios from "axios";
import { Redirect } from "react-router-dom";
import { checkErrorOne, checkErrorThree, checkErrorTwo } from "./checkError";
import TokenService from "./token.service";

const request = axios.create({
  baseURL: "http://139.162.11.245:2828",
  headers: {
    "Content-Type": "application/json",
  },
  timeout: 5000,
});

request.interceptors.request.use(
  (config) => {
    const token = TokenService.getLocalAccessToken();
    console.log(token);
    if (token) {
      // console.log(token);
      // config.headers["Authorization"] = 'Bearer ' + token;  // for Spring Boot back-end
      axios.create({
        headers: {
          'accessToken': token
        }
      })
      // config.headers["x-access-token"] = token; // for Node.js Express back-end
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

request.interceptors.response.use(
  (res) => {
    console.log(res);
    return res;
  },
  async (err) => {
console.log(err);
    checkErrorOne(err);
    checkErrorTwo(err);
    checkErrorThree(err);
    return Promise.reject(err);
  }
);

export default request;
