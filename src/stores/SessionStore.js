import {observable, action} from 'mobx';

export default class SessionStore {

  @observable token = null;
  @observable user = null;

  @action reset = () => {
    this.token = null;
    this.user = null;
  }

}
