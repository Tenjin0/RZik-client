import { observable, action } from 'mobx';

class GenderStore {

  @observable genders;
  @observable selectedGenders;

  constructor(genders = []) {
    this.genders = genders;
    this.selectedGenders = [];
  }

  @action setGenders = (genders) => {
    this.genders = genders;
  }

  @action setSelectedGenders = (genders) => {
    if (genders.length === 0) genders = null;
    for(var i = 0; i< genders.length ; i++) {
      if (typeof genders[i] === "object" && genders[i]) {
        genders[i] = genders[i].id
      }
    }
    this.selectedGenders = genders;
  }

  @action emptySelectedGenders = () => {
    this.selectedGenders = [];  
  }
}

const genderStore = new GenderStore();

export default genderStore;
export { GenderStore };
