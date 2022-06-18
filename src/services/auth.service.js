import api from "./api";
import TokenService from "./token.service";

class AuthService {
  login(username, password) {
    console.log("login", username, password);
    return api
      .post("/security/login", {
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

  logout() {
    TokenService.removeAdmin();
  }

  getCurrentUser() {
    return TokenService.getAdmin();
  }
}

export default new AuthService();
