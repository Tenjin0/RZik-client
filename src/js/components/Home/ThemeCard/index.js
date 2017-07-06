import React from 'react';
import {Card, CardActions, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import PlayButton from './PlayButton'


const ThemeCard = ({title, subtitle, img, handlePlay, playing, song, children}) => (
  <Card className="card" style={{display:'inline-block', margin: '30px 10px'}}>
    <CardMedia
      overlay={<CardTitle title={title} subtitle={subtitle}/>}
    >
      <img src={img}/>
    </CardMedia>
    <CardText className="text">
      {children}
    </CardText>

    <CardActions>
      {playing ?
        <PlayButton handlePlay={() => handlePlay(event, song)} label="pause"/>
        :
        <PlayButton handlePlay={() => handlePlay(event, song)} label="play"/>
      }
    </CardActions>

  </Card>
);

export default ThemeCard;