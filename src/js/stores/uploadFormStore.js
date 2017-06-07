import { observable, action } from 'mobx';

class UploadFormStore {

  @observable isNew;
  @observable isFileLoaded;

  constructor() {
      this.isNew = true
      this.isFileLoaded = false
  }

  @action setIsNew = (isNew) => {
    this.isNew = isNew;
  }

  @action setIsFileLoaded = (isFileLoaded) => {
      this.isFileLoaded = isFileLoaded
  }
}

const uploadFormStore = new UploadFormStore();

export default uploadFormStore;
export { UploadFormStore };
