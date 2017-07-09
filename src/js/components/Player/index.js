import React, {Component} from 'react';
import { observer, inject } from 'mobx-react';

@inject('trackStore') @observer
export default class Player extends Component {
    constructor(props, context) {
        super(props, context);
        this.state = { duration : "0:00",currentTime: "0:00"
      }
    }

    formatTime(time) {
      var min = Math.floor(time / 60);
      var sec = Math.floor(time % 60);
      return min + ':' + ((sec<10) ? ('0' + sec) : sec);
    }
    updateProgress() {
      var current = player.currentTime;
      var percent = (current / this.state.duration) * 100;
      progress.style.width = percent + '%';
      currentTime.textContent = this.formatTime(current);
    }

    handleClick() {
      var player = document.getElementById('audioElement');

      if (player.paused) {
        player.play();
      } else {
        player.pause();
      }
    }
    componentDidMount() {
      var player = document.getElementById('audioElement');
      var progress = document.getElementById('progress');
      player.addEventListener('loadedmetadata', () => {
        this.state.duration = this.formatTime(player.duration);
        this.setState(this.state);
      });
      player.addEventListener('pause', function(e){
        this.props.trackStore.activeTrack =false;
      }.bind(this))
      player.addEventListener('canplay', function(e){
        $(player).off('timeupdate').on('timeupdate', function(e){
          this.props.trackStore.activeTrack = true;
          var current = player.currentTime;
          this.state.currentTime = this.formatTime(current);
          this.setState(this.state);
          var percent = (player.currentTime / player.duration) * 100;
          progress.style.width = percent + '%';
        }.bind(this));
      }.bind(this));
      player.addEventListener('ended', function(){
        this.props.trackStore.activeTrack = true;

      // playPause.attributes.d.value = "M18 12L0 24V0";
      // player.currentTime = 0;
      }.bind(this));
  }

  render() {
    return (
      <div id="player" className="player-container">
        <div className="player-bar">
          <div className="player-bar__left">
            <div className="cover-art" style={{backgroundImage : 'url(http://localhost:3000/images/cover/' + this.props.trackStore.image + ')'}}>
            </div>
            <div className="track-info">
              <div className="track-info__title">
                {this.props.trackStore.title}
              </div>
              <div className="track-info__artist">
                {this.props.trackStore.artist}
              </div>
            </div>
          </div>
          <div className="player-bar__center">
            <div className="player-controls">
              <div className="player-controls__buttons">
                <button className="control-button skip-backward">
                  <i className="fa fa-step-backward" aria-hidden="true"></i>
                </button>
                <button className="control-button control-button--circled" onClick={this.handleClick.bind(this)}>
                    { this.props.trackStore.activeTrack ?
                        <i className="fa fa-pause" aria-hidden="true"></i> :
                        <i className="fa fa-play" aria-hidden="true"></i> 
                    }
                
                </button>
                <button className="control-button skip-forward">
                  <i className="fa fa-step-forward" aria-hidden="true"></i>
                </button>
              </div>
              <div className="player-playback-bar">
                <div className="player-playback-bar__progress-time" >
                    {this.state.currentTime}
                </div>
                <div className="player-progress-bar">
                  <div className="middle-align progress-bar__bg">
                    <div id="progress" className="progress-bar__fg"/>
                  </div>
                </div>
                <div className="player-playback-bar__progress-time">
                  {this.state.duration}
                </div>
              </div>
            </div>
          </div>
          <div className="player-bar__right"></div>
        </div>
        <audio preload="auto" id="audioElement" crossOrigin="localhost:3001" controls>
        </audio>
      </div>
    )
  }
}
