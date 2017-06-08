import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom'
import CustomInputFile from './CustomInputFile'
import AddPhoto from 'material-ui/svg-icons/image/crop-original';
import AvPlayCircleOutline from 'material-ui/svg-icons/av/play-circle-outline';
import FontIcon from 'material-ui/FontIcon';

class Cover extends Component {
    onChangeCoverFile(e) {
        var file = e.target.files[0];
        var reader = new FileReader();
        reader.onload = function(event) {
            document.getElementById('image_cover').style.backgroundImage = 'url(' + event.target.result + ')';
            document.getElementById('show_image').style.display = "block"

            // document.getElementById('image_cover').src = event.target.result;
        }

        reader.readAsDataURL(file);
    }
    resetImage(e) {
        e.preventDefault();
        document.getElementById('image_cover').style.backgroundImage = 'url()';
        document.getElementById('show_image').style.display = "none"
        document.getElementById("cover").value = "";

    }
    render() {
        return (
            <div>
                <CustomInputFile accept="image/*" className="margin-top" name="cover" onchange={ this.onChangeCoverFile.bind(this)}>
                    <AddPhoto />
                </CustomInputFile>
                <div id="show_image" style={{display : "none"}} className="show-image">
                    <div ref="image_cover" id="image_cover" className="image_cover">  
                    </div>
                    <div ref="image_cover" className="image_cover z-index">  
                        <button onClick={this.resetImage.bind(this)} className="cover-delete"><i className="fa fa-times fa-2x" aria-hidden="true"></i></button>
                    </div>
                </div>
            </div>  
        );
    }
}

export default Cover;
