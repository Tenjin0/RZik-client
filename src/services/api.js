import {API_URL} from '../constants/authentification';
import {USERS} from '../constants/endpoints';

export function apiUrl() {
  return `${API_URL}/${USERS}`
}

export function authUrl() {
  return `${API_URL}/auth`
}

export function apiUserUrl(param) {
  return `${API_URL}/${USERS}`
}