import {signupUrl, userUrl} from '../services/api'
import registerStore from '../stores/registerStore'


export function createUser() {
  return new Promise((resolve, reject) => {
    axios.post(signupUrl(), {
      email: registerStore.email,
      password: registerStore.password,
    }).then(response => {
        resolve(response);
      })
      .catch(error => {
        reject(error);
      });
  });
}

export function fetchUser() {
  return new Promise((resolve, reject) => {
    axios.get(userUrl()).then(response => {
      resolve(response);
    }).catch(error => {
        reject(error);
      });
  });
}