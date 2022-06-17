class TokenService {
  getLocalRefreshToken() {
    const admin = localStorage.getItem("refreshToken");
    return admin;
  }

  getLocalAccessToken() {
    const admin = localStorage.getItem("accessToken");
    return admin;
  }

  updateLocalAccessToken(token) {
    console.log(typeof token);
    let admin = localStorage.getItem("accessToken");
    admin = token;
    localStorage.setItem("accessToken", admin);
  }

  getAdmin() {
    return JSON.parse(localStorage.getItem("admin"));
  }

  setAdmin(admin) {
    // console.log(JSON.stringify(admin));
    localStorage.setItem("accessToken", admin.accessToken);
    localStorage.setItem("refreshToken", admin.refreshToken);
  }

  removeAdmin() {
    localStorage.removeItem("admin");
  }
}

export default new TokenService();
