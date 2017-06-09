import { observable, action } from 'mobx';

class UploadFormStore {

  @observable isNew;
  @observable isFileLoaded;
  @observable id;
  @observable title;
  @observable description;
  @observable artist;
  @observable composer;
  @observable creation_date;
  @observable duration;
  @observable explicit_content;
  @observable download_authorization;
  @observable id_user;

  constructor() {
      this.isNew = true
      this.isFileLoaded = false
      this.title = "";
      this.artist = "";
      this.description = "";
      this.composer = "";
      this.explicit_content = false;
      this.download_authorization = false;
      this.duration = "00:00:00"
      this.creation_date = "2000-01-01"
  }

  @action setIsNew = (isNew) => {
    this.isNew = isNew;
  }

  @action setIsFileLoaded = (isFileLoaded) => {
      this.isFileLoaded = isFileLoaded
  }

  @action setForm = (form) =>{
    for (var key in form) {
        if (this.hasOwnProperty(key)) {
          this[key] = form[key];
        }
    }
  }
}

const uploadFormStore = new UploadFormStore();

export default uploadFormStore;
export { UploadFormStore };
