import React, {Component} from 'react';
import {observer, inject} from "mobx-react";
import {fetchPlaylists} from "../../actions/playlist";

@inject(['playlistStore']) @observer
export default class Registration extends Component {
  constructor(props) {
    super(props);
    this.state = {
      playlists: []
    };
  }

  componentWillMount() {
    fetchPlaylists().then(response => {
      this.setState({
        playlists : response.data,
      });
      console.log('PLAYLISTS ', response.data);
    }).catch(err => {
      console.log(err);
    });
  }

  render() {
    // const {name, description, user, audiofiles} = this.props.playlistStore;
    const playlists = this.state.playlists;

    const playlistList = playlists.map(playlist => (
      <li key={playlist.id}>
        Nom : {playlist.name}
        <br/>
        {playlist.description}
        <br/>
        Créer par : {playlist.id_user}
        <br/>
        nombre de musique : {playlist.Audiofiles.length}
      </li>
    ));

    return (
      <div>
        <hr/>
        Les playlists
        <ul>{playlistList}</ul>
        <hr/>
      </div>
    )
  }
}
