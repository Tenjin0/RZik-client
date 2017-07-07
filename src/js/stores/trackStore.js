import {observable, action} from 'mobx';

class TrackStore {

  @observable tracks;
  @observable activeTrack;
  @observable image;
  @observable title;
  @observable artist;

  constructor(tracks = []) {
    this.tracks = tracks;
    this.image = "";
    this.title = "";
    this.artist = "";
  }
  
  @action setTrack(image, title, artist) {
    this.image = image;
    this.title = title;
    this.artist = artist;
  }
}

const trackStore = new TrackStore();

export default trackStore;
export { TrackStore };
