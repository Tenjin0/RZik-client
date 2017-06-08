import {observable, computed} from "mobx";

class RegisterStore {
  @observable email = '';
  @observable emailConfirmation = '';
  @observable password = '';
  @observable passwordConfirmation = '';

  @computed get isFullfilled() {
    return this.email && this.emailConfirmation && this.password && this.passwordConfirmation;
  }

}

const registerStore = new RegisterStore();

export default registerStore;
export { registerStore };