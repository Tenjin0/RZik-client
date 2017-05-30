import {observable, computed, action} from 'mobx';
import {API_URL} from '../constants/authentification';
import {USERS} from '../constants/endpoints';

export default new class UserStore {
  @observable lastname = '';
  @observable firstname = '';
  @observable email = '';
  @observable accessToken = '';
  @observable refreshToken = '';

  createUser() {
    return fetch(`${API_URL}/${USERS}`)
      .then(response => response.json())
      .then(data => {
        // MAJ du store
      });
  }
}
