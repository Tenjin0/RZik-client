import React, {Component} from 'react';

export default class Player extends Component {
  render() {
    return (
      <div id="player">
        <audio id="audioElement" crossOrigin="anonymous" controls>
          Votre natigateur ne supporte l'élément audio.
          Your browser does not support the audio element.
        </audio>
      </div>
    )
  }
}