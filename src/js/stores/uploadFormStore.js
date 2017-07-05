import { observable, action } from 'mobx';
import moment from 'moment';

class UploadFormStore {

  @observable isNew;
  @observable isFileLoaded;
  @observable form;
  @observable errors;

  constructor() {
      this.isNew = true;
      this.isFileLoaded = false;
      this.form = new Map();
      this.initForm();
      this.errors = new Map();
      this.initErrors();
  }

  @action setIsNew = (isNew) => {
    this.isNew = isNew;
  }

  @action setIsFileLoaded = (isFileLoaded) => {
      this.isFileLoaded = isFileLoaded
  }
  
  initForm = () => {
        this.form.set("title" , ""),
        this.form.set("artist" , ""),
        this.form.set("composer" , ""),
        this.form.set("description" , ""),
        this.form.set("explicit_content" , false),
        this.form.set("download_authorization" , false),
        this.form.set("duration" , "00:00:00"),
        this.form.set("creation_date" , moment().year())
        this.form.set("genders" , "")
  }

  initErrors = () => {
    var keys = this.form.keys();
    for (var key of keys) {
        /* useful code here */
        this.errors.set(key, "");
    }
  }
  @action setErrors = (errors) => {
    for (var key of this.errors.keys()) {
        if (errors[key]) {
          this.errors.set(key, errors[key]);
        } else {
          this.errors.set(key, "");
        }
    }
  }

  @action setForm = (form) =>{
    for (var key in form) {
        if (this.form.has(key)) {
          this.form.set(key, form[key]);
        }
    }
  }
}

const uploadFormStore = new UploadFormStore();

export default uploadFormStore;
export { UploadFormStore };
