import React, {Component} from 'react';

export default class Player extends Component {

  playSong() {
    document.getElementById('audioElement').play();
  }
  pauseSong() {
    document.getElementById('audioElement').pause();
  }
  render() {
    return (
      <div id="player">
        <audio id="audioElement" crossOrigin="anonymous">
          <source src="one_dance.m4a" type="audio/ogg" />
          Votre natigateur ne supporte l'élément audio.
          Your browser does not support the audio element.
        </audio>

        <button onClick={this.playSong.bind(this)}>Play</button>
        <button onClick={this.pauseSong.bind(this)}>Pause</button>

        <progress min="0" max="100" value="0"></progress>
        <div className="controls"></div>
      </div>
    )
  }
}