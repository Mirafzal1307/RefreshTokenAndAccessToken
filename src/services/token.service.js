class TokenService {
  getLocalRefreshToken() {
    const admin = localStorage.getItem("refreshToken");
    return admin;
  }

  getLocalAccessToken() {
    return localStorage.getItem("accessToken");
  }

  updateLocalAccessToken(token) {
    localStorage.setItem("accessToken", token);
  }

  getAdmin() {
    return JSON.parse(localStorage.getItem("admin"));
  }

  setAdmin(admin) {
    localStorage.setItem("accessToken", admin.accessToken);
    localStorage.setItem("refreshToken", admin.refreshToken);
  }

  removeAdmin() {
    localStorage.removeItem("admin");
    localStorage.removeItem("accessToken");
    localStorage.removeItem("refreshToken");
  }
}

export default new TokenService();
