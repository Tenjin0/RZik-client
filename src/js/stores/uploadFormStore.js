import { observable, action } from 'mobx';

class UploadFormStore {

  @observable genders;
  @observable selectedGenders;

  constructor(genders = []) {
    this.genders = genders;
  }

  @action setGenders = (genders) => {
    this.genders = genders;
  }

  @action setSelectedGenders = (genders) => {
    if (genders.length === 0) genders = null;

    this.selectedGenders = genders;
  }

  @action emptySelectedGenders = () => {
    this.selectedGenders = [];  
  }
}

const uploadFormStore = new UploadFormStore();

export default UploadFormStore;
export { uploadFormStore };
