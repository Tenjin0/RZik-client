import {observable, computed} from "mobx";

class PlaylistStore {
  @observable nbPlaylist = '';
  @observable playlists = [];


}

const playlistStore = new PlaylistStore();

export default playlistStore;
export { playlistStore };