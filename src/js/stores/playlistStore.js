import {observable, computed} from "mobx";

class PlaylistStore {
  @observable name = '';
  @observable description = '';
  @observable audiofiles = [];
  @observable user = '';


}

const playlistStore = new PlaylistStore();

export default playlistStore;
export { playlistStore };