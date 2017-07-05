import React from 'react';

import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';


const CardExampleWithAvatar = () => (
  <Card className="card">
    <CardMedia
      overlay={<CardTitle title="ROCK' N' ROLL" subtitle="78666 Abonnés"/>}
    >
      <img src="https://s3-us-west-2.amazonaws.com/teddarcuri.monarch/andrew+bird.jpg"/>
    </CardMedia>
    <CardTitle title="ROCK" subtitle=""/>
    <CardText className="text">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      Donec mattis pretium massa. Aliquam erat volutpat. Nulla facilisi.
      Donec vulputate interdum sollicitudin. Nunc lacinia auctor quam sed pellentesque.
      Aliquam dui mauris, mattis quis lacus id, pellentesque lobortis odio.
    </CardText>

    <a onClick={play()} href="#">PLAY</a>

    <CardActions>
      <FlatButton label="PLAY"/>
    </CardActions>

  </Card>
);

export default CardExampleWithAvatar;