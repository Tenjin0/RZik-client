import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom'
import { observer, inject } from 'mobx-react';
import Checkbox from 'material-ui/Checkbox';

@inject('uploadFormStore') @observer
class CheckBoxForm extends Component {

    capitalizeFirstLetter(string) {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }  

    handleChange(e, isInputChecked) {
        if (this.props.uploadFormStore['set' + this.capitalizeFirstLetter(this.props.name)]) {
            this.props.uploadFormStore['set' + this.capitalizeFirstLetter(this.props.name)](e.target.value);
        } else if (this.props.uploadFormStore.setForm) {
            var args = {}
            args[this.props.name] = isInputChecked
            this.props.uploadFormStore.setForm(args)
        }
    }

    shouldComponentUpdate(nextProps, nextState) {
        return true
    }
    render() {
        return(
            <Checkbox
                id={this.props.name}
                name={this.props.name}
                label={this.props.name}
                style = {this.props.style}
                checked={this.props.uploadFormStore.form.get(this.props.name)}
                onCheck={this.handleChange.bind(this)}
            />
        )
    }
}

export default CheckBoxForm;
