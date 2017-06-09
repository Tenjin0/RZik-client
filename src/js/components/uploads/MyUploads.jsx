import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom'
import { observer, inject } from 'mobx-react';
import uploadFormStore from '../../stores/uploadFormStore'
import { FormattedMessage } from 'react-intl';

@inject('uploadFormStore','locale') @observer
class MyUploads extends Component {
    constructor() {
        super()
    }

    onClick() {
        this.props.locale.value = this.props.locale.value  === 'en' ? 'fr' : 'en'
        // this.props.locale.setIsFileLoaded(!this.props.uploadFormStore.isFileLoaded)
    }

    componentDidMount() {
        console.warn(this.context);
        console.warn(this.props)
    }
    render() {
        return (
            <div>
                <FormattedMessage id="app.welcome"/ >
                <button onClick={this.onClick.bind(this)}>Submit</button>
            </div>  
        );
    }
}

export default MyUploads;
