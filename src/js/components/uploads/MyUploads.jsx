import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom'
import { observer, inject } from 'mobx-react';
import { FormattedMessage } from 'react-intl';
import Api  from '../../services/api2'
import UploadPreview from './uploadPreview';

@inject('uploadStore','locale') @observer
class MyUploads extends Component {
    constructor(props, context) {
        super(props, context);
    }

    componentDidMount() {
        var endpoint = 'audiofiles';
        if (this.props.match.params.who && this.props.match.params.who === "me") {
            endpoint += '/myuploads';
        }
        (new Api()).get(endpoint)
        .then(res => {
            this.props.uploadStore.setUploads(res.data.audiofiles);
            // this.props.genderStore.setGenders(res.data);
            // const posts = res.data.data.children.map(obj => obj.data);
            // this.setState({ posts });
        }).catch(error => {
            console.warn(error);
        });
    }
     
    createUploadlist() {
        return this.props.uploadStore.uploads.map((upload) => {
            return <UploadPreview key={upload.id} preview={upload}/>
        });
    }

    render() {
        return (
            <ul>
            {this.createUploadlist()}
            </ul>
        );
    }
}

export default MyUploads;
