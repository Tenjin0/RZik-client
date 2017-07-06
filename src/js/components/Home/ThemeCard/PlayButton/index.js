import React from 'react';
import FlatButton from 'material-ui/FlatButton';

const PlayButton = ({label, handlePlay}) => (
  <FlatButton className="playButton" onClick={handlePlay} label={label} fullWidth={true}/>
);

export default PlayButton;