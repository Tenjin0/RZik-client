import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom'
import { observer, inject } from 'mobx-react';
import uploadFormStore from '../../stores/uploadFormStore'

@inject('uploadFormStore') @observer
class MyUploads extends Component {
    constructor() {
        super()
    }

    onClick() {
        this.props.uploadFormStore.setIsFileLoaded(!this.props.uploadFormStore.isFileLoaded)
    }
    render() {
        return (
            <div>
                {this.props.uploadFormStore.isFileLoaded ? 'true' : 'false'}
                <button onClick={this.onClick.bind(this)}>Submit</button>
            </div>  
        );
    }
}

export default MyUploads;
