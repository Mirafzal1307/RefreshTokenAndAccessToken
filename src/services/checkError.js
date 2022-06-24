import AuthService from './auth.service';
import TokenService from "./token.service";

const data = {
    refreshToken: localStorage.getItem('refreshToken')
}
export const checkErrorOne = (message, status) => {
    // const mess = JSON.stringify(message);
    // const messageTwo = JSON.parse(mess);
  
    // console.log( typeof messageTwo);
    console.log(status, "status");

    console.log(message);
    if (status === 403) {
        switch (message) {
            case "code=1":
                // debugger;
               
                AuthService.getrefreshToken(data).then(
                    (res) => {
                        debugger;
                        console.log(res, 'res');
                        TokenService.removeAdmin();
                        TokenService.setAdmin(res.data);
                    }
                )
                break;
            case "code=2":
                // debugger;
                window.location.href = "/login";
                break;

            // case "code=3":
            //     // TokenService.removeAdmin();
            //     return;
            // default:
            //     alert("wrong");
            //     return;
        }
    }
}

export const checkErrorTwo = async (message, status) => {
    console.log(message, "message", status, "status");
    // if (status === 403) {
    // switch (message) {
    //     case "code=3":
    //         window.location.href = "/login";
    //         switch(message){
    //             case "code=2":
    //                 const data = {
    //                     refreshToken: localStorage.getItem('refreshToken')
    //                 }
    //                 AuthService.getrefreshToken(data).then(
    //                     (res) => {
    //                         console.log(res, 'res');
    //                         TokenService.removeAdmin();
    //                         TokenService.setAdmin(res.data);
    //                     }
    //                 )
    //                 return;
    //             }
    //         return;
    //     default:
    //         alert("Something");
    //         return;
    // }
    // }
}