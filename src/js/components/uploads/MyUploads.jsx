import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom'

class MyUploads extends Component {

    render() {
        console.warn('toto')
        return (
            <div>
                <CustomInputFile accept="image/*" className="margin-top" name="cover" onchange={ this.onChangeCoverFile.bind(this)}>
                    <AddPhoto />
                </CustomInputFile>
                
                <div ref="image_cover" id="image_cover"></div>
            </div>  
        );
    }
}

export default MyUploads;
