import api from './api';

// console.log(api);
class UserService {
  async getPublicContent() {
    return await api.get('/character-property/admin/property');
  }
}

export default new UserService();
