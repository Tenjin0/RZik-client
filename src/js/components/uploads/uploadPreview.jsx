import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import Auth from '../../services/auth'

class UploadPreview extends Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            play : false
        }
    }

    handleClick(e) {
        console.warn(e)
        var player = document.getElementById('audioElement');
        if (player) {
            player.src = `${FULL_API_URL}/audiofiles/${this.props.preview.id}/stream?token=${Auth.getAuthenticatedToken()}`
        }
        if (this.state.play) {
            player.play();
        } else {
            player.pause();
        }
        this.state.play =!this.state.play;
        this.setState(this.state)
    }
    render() {
        var style = { backgroundImage : 'url(http://localhost:3000/images/cover/' + this.props.preview.cover + ')'}
        return (
            <li className="preview">
             <div className="cover">
                <div className="image"  style={ style }/>
                <div className="image image-button">
                    <button onClick={this.handleClick.bind(this)}>
                    { this.state.play ?
                        <i className="fa fa-pause" aria-hidden="true"></i> :
                        <i className="fa fa-play" aria-hidden="true"></i> 
                    }
                    </button>
                </div>
             </div>
             <div className="action">
                <Link to={`/uploads/${this.props.preview.id}`}><i className="fa fa-pencil" aria-hidden="true"></i></Link>
             </div>
             <div className="line">
                <div className="first_line">
                    { this.props.preview.title }
                </div>
                <div className="second_line">
                    { this.props.preview.composer}
                </div>
                <div className="third_line">
                </div>
             </div>
            </li>
        );
    }
}

export default UploadPreview;
