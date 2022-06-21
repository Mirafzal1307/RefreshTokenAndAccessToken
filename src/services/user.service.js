// import {request} from './api';

import request from "./api";

// console.log(api);
import request from "./api";

class UserService {
  async getPublicContent() {

    // try{
    //    const {data} = await request({
    //     url: '/character-property/admin/property',
    //     method: 'GET',

    //   });
    //   return data;
    // } catch(err){
    //   console.log(err);
    // }
    return new Promise((resolve, reject) => {
      request({
        url: '/character-property/admin/property',
        method: 'GET',
      })
        .then(data => {
          resolve(data);
        }).catch(err => {
          console.log(err);
          reject(err);
        })
    })


  }
}

export default new UserService();
