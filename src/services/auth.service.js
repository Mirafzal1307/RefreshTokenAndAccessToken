import api from "./api";
import TokenService from "./token.service";

class AuthService {
  login(username, password) {
    console.log("login", username, password);
    return api
      .post("/login", {
        username,
        password
      })
      .then(response => {
        if (response.data.accessToken) {
          TokenService.setAdmin(response.data);
        }

        return response.data;
      });
  }
  refreshToken(data) {
    return api({
      url: '/refresh',
      method: 'post',
      data: data
    })
  }
  getrefreshToken(data) {
    return api({
      url: '/getrefresh',
      method: 'post',
      data: data
    })
  }
  chekGetRefreshToken() {
    return api({
      url: '/check-toke',
      method: 'get'
    })
  }
  testGet() {
    return api.get('/test')
  }
  logout() {
    TokenService.removeAdmin();
  }

  getCurrentUser() {
    return TokenService.getAdmin();
  }
}

export default new AuthService();
