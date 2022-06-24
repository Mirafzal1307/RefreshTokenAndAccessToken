import api from "./api";
import TokenService from "./token.service";

class AuthService {
  login(username, password) {
    // console.log("login--------------->", username, password);
    return api
      .post("/security/login", {
        username,
        password
      })
      .then(response => {
        // debugger;
        // console.log(response.status, "response.status");
        if (response.data.accessToken) {
        
          TokenService.setAdmin(response.data);
        }

        return response;
      });
  }
  getData(){
    return api.get('/product/admin/create-page');
  }
  // refreshToken(data) {
  //   return api({
  //     url: '/refresh',
  //     method: 'post',
  //     data: data
  //   })
  // }
  getrefreshToken(data) {
    console.log(data.refreshToken , 'data------------------------------->>');
    // debugger;
    return api({
      url: `/security/login/refresh?refresh_token=${data.refreshToken}`,
      method: 'post',
      data: data
    })
  }
  // chekGetRefreshToken() {
  //   return api({
  //     url: '/check-toke',
  //     method: 'get'
  //   })
  // }

  logout() {
    TokenService.removeAdmin();
  }

  getCurrentUser() {
    return TokenService.getAdmin();
  }
}

export default new AuthService();
