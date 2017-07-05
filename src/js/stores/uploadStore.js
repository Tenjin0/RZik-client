import { observable, action } from 'mobx';

class UploadStore {

    @observable uploads;

    constructor() {
        this.uploads = [];
    }

    @action setUploads(uploads) {
        this.uploads = uploads;
    }
}

const uploadStore = new UploadStore();

export default uploadStore;
export { UploadStore }
