import axios from "axios";
import { checkErrorOne, checkErrorThree, CheckErrorThree, checkErrorTwo } from "./checkError";
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
        const token = localStorage.getItem('accessToken');
        if (token) {
            config.headers["access_token"] = token; // for Node.js Express back-end
        }
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

request.interceptors.response.use(null ,
     (err) => {
        console.log(err.response);
         const {data} = err.response; 
         const {status} = err.response;
        checkErrorOne(data.slice(1,7), status);
        checkErrorTwo();
        return Promise.reject(err);
    }
);

export default request;
