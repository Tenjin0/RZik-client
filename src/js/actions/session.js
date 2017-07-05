import {authUrl} from '../services/api';
import Auth from '../services/auth'
import Api from '../services/api2'
import {observer, inject} from "mobx-react";

export function login(sessionStore, email, password) {
   return new Promise((resolve, reject) => {
    axios.post(API_URL +'/signin', {
      email: email,
      password: password,
    }).then(response => {
        Auth.setToken(response.data.token)
        sessionStore.token = response.data.token;
        sessionStore.user = response.data.user;
        resolve(response);
      })
      .catch(error => {
        reject(error);
      });
  });
}

export function logout(sessionStore) {
  Auth.deauthenticateUser()
  sessionStore.reset();
}
