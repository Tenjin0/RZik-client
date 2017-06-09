import React, { Component } from 'react';
import { observer, inject } from 'mobx-react';
import { FormattedMessage } from 'react-intl';

@inject('locale') @observer
class Langugage extends Component {
    constructor() {
        super()
    }

    onClick() {
        this.props.locale.value = this.props.locale.value  === 'en' ? 'fr' : 'en'
        // this.props.locale.setIsFileLoaded(!this.props.uploadFormStore.isFileLoaded)
    }

    componentDidMount() {
    }
    render() {
        return (
            <div>
                {this.props.locale.formatMessage("app.welcome")}
                <FormattedMessage id="app.welcome"/ >
                <button onClick={this.onClick.bind(this)}>Submit</button>
            </div>  
        );
    }
}

export default Langugage;
