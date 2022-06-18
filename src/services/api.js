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
    // console.log(res);
    return res;
  },
  async (err) => {
    // const originalConfig = err.config;
    // const refresh_token = TokenService.getLocalRefreshToken();
    // Access Token was expired
    // if ( err.response.status === 403 && !originalConfig._retry) {
    //   originalConfig._retry = true;
    //   try {
    //     const res = await request({
    //       url: '/security/login/refresh' ,
    //       method: 'post',
    //       params: {
    //         refresh_token : refresh_token
    //       }
    //     })
    //     const { accessToken } = res.data;
    //     TokenService.updateLocalAccessToken(accessToken);

    //     return request(originalConfig);
    //   } catch (_error) {
    //     console.log(_error);
    //     return Promise.reject(_error)
    //   }
    // } 
    checkErrorOne(err);
    checkErrorTwo(err);
    checkErrorThree(err);
    return Promise.reject(err);
  }
);

export default request;
