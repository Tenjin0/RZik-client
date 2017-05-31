import Cookies from 'js-cookie';
import {authUrl} from '../services/api';
import {OAUTH_TOKEN} from '../services/api';
import SessionStore from '../stores/SessionStore';

export function login(email, password) {
  fetch((authUrl()), {
    method: 'POST',
    body: JSON.stringify({
      email: email,
      password: password
    })
  }).then(response => response.json())
    .then(token => {
        Cookies.set(OAUTH_TOKEN, token);
        SessionStore.token = token;
        SessionStore.user = user;
      }
    );

}

export function logout() {
  Cookies.remove(OAUTH_TOKEN);

  SessionStore.reset();
}