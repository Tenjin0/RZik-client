import {signupUrl} from '../services/api'
import registerStore from '../stores/registerStore'

export function createUserCb(cb) {
  axios.post(signupUrl(), {
    email: registerStore.email,
    password: registerStore.password,
  })
    .then(response => cb(null, response.json()))
    .catch(function (error) {
      cb(error, null);
    });
}

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
        // return reject(error);
      });
  });

}