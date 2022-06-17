import axios from "axios";
import TokenService from "./token.service";

const instance = axios.create({
  baseURL: "http://139.162.11.245:2828",
  headers: {
    "Content-Type": "application/json",
  },
});

instance.interceptors.request.use(
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
    // console.log(error);
    return Promise.reject(error);
  }
);

instance.interceptors.response.use(
  (res) => {
    // console.log(res);
    return res;
  },
  async (err) => {
    console.log(err.response);
    const originalConfig = err.config;

    const refresh_token = TokenService.getLocalRefreshToken();
    // console.log(refresh_token);

    // console.log(originalConfig);

    // Access Token was expired
    if (err.response.status >= 400 && !originalConfig._retry) {
      originalConfig._retry = true;
      try {
        const rs = await instance.post(`/security/login/refresh?refresh_token=${refresh_token}`);
        const { accessToken } = rs.data;
        console.log(`accToken$}`);
        console.log();
        // let accessToken = Object.values(rs.data)[0]

        // console.log(accessToken);
        TokenService.updateLocalAccessToken(accessToken);
        // let orConf = await instance(originalConfig) 
        // console.log(`----${orConf}`);
        return instance(originalConfig);
      } catch (_error) {
        console.log(`Erorrs-----${_error}`);
        return Promise.reject(_error);
      }
    }


    return Promise.reject(err);
  }
);

export default instance;
