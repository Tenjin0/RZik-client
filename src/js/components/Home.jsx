import React, {Component} from 'react';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';

let audio = document.getElementById('audioElement');

function PlayButton(props) {
  return (
    <FlatButton onClick={props.handlePlay} label={props.label} fullWidth={true} />
  );
}

class Home extends Component {
  constructor(props, context) {
    super(props, context);
    this.props = props;
    this.state = {
      playing: false
    }
  }

  handlePlay() {
    var audio = document.getElementById('audioElement');
    if(audio.paused) {
      audio.play();
    } else {
      audio.pause();
    }
    this.setState({
      playing: !this.state.playing
    });
  }


  render() {
    return (
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

        <CardActions>
          {this.state.playing ?
            <PlayButton handlePlay={this.handlePlay.bind(this)} label="pause"/>
            :
            <PlayButton handlePlay={this.handlePlay.bind(this)} label="play"/>
          }
        </CardActions>

      </Card>
    );
  }
}

export default Home;
