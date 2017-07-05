import {observable, action} from 'mobx';

class SessionStore {

  @observable token = null;
  @observable user = null;
  @observable roles = ['anonymous'];

  @action reset = () => {
    this.token = null;
    this.user = null;
    this.roles = ['anonymous'];
  }

  @action setUser = (user) => {
    this.user = user;
  }

  @action setRoles = (roles) => {
    this.roles = roles;
  }
}


const sessionStore = new SessionStore();

export default sessionStore;
export { SessionStore };
