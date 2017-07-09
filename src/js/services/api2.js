import cookie from 'js-cookie';
import {OAUTH_TOKEN} from '../constants/authentification';

export default class Api {
    constructor() {
    }
    
    send(method,endpoint, data) {
        let opts = {
            headers: { 'Authorization': cookie.get(OAUTH_TOKEN) },
            method: method,
            url: `${FULL_API_URL}/${endpoint}`,
        }

        if(data) {
            opts.data = data;
        }
        return axios(opts)
    }

    get(endpoint,data) {
        return this.send('GET', endpoint, data);
    }

    post(endpoint,data) {
        return this.send('POST', endpoint, data);
    }

    put(endpoint,data) {
        return this.send('PUT', endpoint, data);
    }

    delete(endpoint,data) {
        return this.send('DELETE', endpoint, data);
    }
}
