import {playlistUrl} from '../services/api'
import playlistStore from '../stores/playlistStore'

export function fetchPlaylists() {
  return new Promise((resolve, reject) => {
    axios.get(playlistUrl())
      .then(response => {
        resolve(response);
      })
      .catch(error => {
        reject(error);
        // return reject(error);
      });
  });

}