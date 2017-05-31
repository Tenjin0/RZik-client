import {observable, computed} from "mobx";

export default new class RegisterStore {
  @observable lastname = '';
  @observable firstname = '';
  @observable email = '';
  @observable emailConfirmation = '';
  @observable password = '';
  @observable passwordConfirmation = '';

  @computed get isFullfilled() {
    return this.lastname && this.firstname && this.email && this.emailConfirmation && this.password && this.passwordConfirmation;
  }

}