import {} from '../constants/authentification';
import * as ENDPOINTS from '../constants/endpoints';

export function apiUrl() {
  return `${API_URL}/${ENDPOINTS.USERS}`
}

export function authUrl() {
  return `${API_URL}/auth`
}

export function apiUserUrl(param) {
  return `${API_URL}/${ENDPOINTS.USERS}`
}

export function signupUrl() {
  return `${API_URL}/${ENDPOINTS.SIGNUP}`
}

export function playlistUrl() {
  return `${FULL_API_URL}/${ENDPOINTS.PLAYLIST}`
}

export function userUrl() {
  return `${FULL_API_URL}/${ENDPOINTS.USERS}`
}