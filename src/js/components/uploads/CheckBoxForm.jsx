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
        if (this.props.store['set' + this.capitalizeFirstLetter(this.props.name)]) {
            this.props.store['set' + this.capitalizeFirstLetter(this.props.name)](isInputChecked);
        } else if (this.props.store.setForm) {
            var args = {}
            args[this.props.name] = isInputChecked
            this.props.store.setForm(args)
        }
    }

    shouldComponentUpdate(nextProps, nextState) {

        return true
    }
    render() {
        if (typeof this.props.store[this.props.name])
        return(<Checkbox
            id={this.props.name}
            name={this.props.name}
            label={this.props.name}
            style = {this.props.style}
            checked={this.props.store[this.props.name]}
            onCheck={this.handleChange.bind(this)}
        />)
    }
}

export default CheckBoxForm;
