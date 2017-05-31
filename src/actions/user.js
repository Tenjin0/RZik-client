import {apiUserUrl} from '../services/api'
import {RegisterStore} from '../stores/RegisterStore'

export function createUser() {
  return fetch(apiUserUrl('new'), {
    method: 'POST',
    body: JSON.stringify({
      firstname: RegisterStore.firstname,
      lastname: RegisterStore.lastname,
      email: RegisterStore.email,
      password: RegisterStore.password,
    })
  }).then(response => response.json());
}