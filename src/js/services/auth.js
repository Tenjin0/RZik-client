import cookie from 'js-cookie';
import {OAUTH_TOKEN} from '../constants/authentification';

export default class Auth {

    static setToken(token) {
       cookie.set(OAUTH_TOKEN, token)
    }

    static getAuthenticatedToken()  {
        return cookie.get(OAUTH_TOKEN)
    }

    static isUserAuthenticated() {
        return cookie.get(OAUTH_TOKEN) !== undefined;
    }

    static deauthenticateUser(sessionStore) {
        cookie.remove(OAUTH_TOKEN);
        sessionStore.reset();
    }
}

