import React, {Component} from 'react';
import {observer, inject} from "mobx-react";
import {fetchPlaylists} from "../../actions/playlist";

@inject(['playlistStore']) @observer
export default class Registration extends Component {

  componentWillMount() {
    fetchPlaylists().then(response => {
      this.props.playlistStore;
      console.log('USER REGISTERED ', response);
    }).catch(err => {
      console.log(err);
    });
  }


  render() {
    const {nbPlaylist, playlists} = this.props.playlistStore;
    return (
      <div>
        <hr/>
        Les playlists
        <hr/>
      </div>
    )
  }
}
