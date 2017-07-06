import React, {Component} from 'react';
import ThemeCard from './ThemeCard'


class Home extends Component {
  constructor(props, context) {
    super(props, context);
    this.props = props;
    this.state = {
      playing: false
    }
  }

  handlePlay(e, song) {
    let audio = document.getElementById('audioElement');
    if(song === audio.getAttribute('src')) {
      if (audio.paused) {
        audio.play();
      } else {
        audio.pause();
      }
    } else {
      audio.setAttribute('src', song);
      audio.play();
    }

  }


  render() {
    return (
    <div style={{paddingBottom: '50px'}}>
      <div className="masthead">
        <div className="selector background">

        </div>
        {/*<img className="selector" src="./rzik-masthead.jpg" />*/}
        <span>
            FEEL THE SOUND <i>EMOTION</i>
        </span>
      </div>
      <div style={{textAlign:'center', background : 'rgb(230,230,230)', paddingTop: '30px'}}>
        <p style={{color: 'black', fontSize: "20px"}}>
          TU AS ENVIE D'ECOUTER ?
        </p>
        <ThemeCard title="HIP HOP" subtitle="78666 Abonnés"
                   img="http://s3.amazonaws.com/hiphopdx-production/2016/04/Drake-One-Dance-616x620.jpg"
                   handlePlay={this.handlePlay.bind(this)}
                   playing={this.state.playing}
                   song="one_dance.m4a"
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Donec mattis pretium massa. Aliquam erat volutpat. Nulla facilisi.
        </ThemeCard>

        <ThemeCard title="RAP US" subtitle="78666 Abonnés"
                   img="https://s-media-cache-ak0.pinimg.com/originals/7a/dc/f9/7adcf99bce169933edb65b0687f16d02.jpg"
                   handlePlay={this.handlePlay.bind(this)}
                   playing={this.state.playing}
                   song="light_another.mp3">
          Donec mattis pretium massa. Aliquam erat volutpat. Nulla facilisi.
          Aliquam dui mauris, mattis quis lacus id, pellentesque lobortis odio.
        </ThemeCard>

        <ThemeCard title="RNB" subtitle="54546 Abonnés"
                   img="http://runthetrap.com/wp-content/uploads/2016/02/work.jpg"
                   handlePlay={this.handlePlay.bind(this)}
                   playing={this.state.playing}
                   song="work.mp3">
          Donec mattis pretium massa. Aliquam erat volutpat. Nulla facilisi.
          Aliquam dui mauris, mattis quis lacus id, pellentesque lobortis odio.
        </ThemeCard>

      </div>

    </div>




    );
  }
}

export default Home;
