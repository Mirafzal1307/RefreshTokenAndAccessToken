import AuthService from './auth.service'
import TokenService from "./token.service";
export const checkErrorOne = (error) => {
    console.log(error);
    if (error.response) {
        // The request was made and the server responded with a status code
        // that falls out of the range of 2xx
        console.log(error.response.data);
        console.log(error.response.status);
        console.log(error.response.headers);
    } else if (error.request) {
        // The request was made but no response was received
        // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
    }
}
export const checkErrorTwo = (error) => {
    const data  = {
        refreshToken: localStorage.getItem('refreshToken')
    }
    if (error.response.status ===401) {
        AuthService.getrefreshToken(data)
            .then(res => {
                TokenService.removeAdmin()
                TokenService.setAdmin(res.data)
                localStorage.setItem('ref', true)
                AuthService.chekGetRefreshToken()
                    .then(res => {
                        console.log(res)
                    })
            })
        // The request was made and the server responded with a status code
        // that falls out of the range of 2xx
        console.log(error.response.data);
        // console.log(error.response.status);
        if (error.response.status) {

        }
        console.log(error.response.headers);
    } else if (error.request) {
        // The request was made but no response was received
        // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
    }
}
export const checkErrorThree = (error) => {
    console.log(error);
    if (error.response) {
        // The request was made and the server responded with a status code
        // that falls out of the range of 2xx
        console.log(error.response.data);
        console.log(error.response.status);
        console.log(error.response.headers);
    } else if (error.request) {
        // The request was made but no response was received
        // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
    }
}
