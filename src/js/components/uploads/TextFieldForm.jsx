import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom'
import { observer, inject } from 'mobx-react';
import TextField from 'material-ui/TextField';
import Checkbox from 'material-ui/Checkbox';

@inject('uploadFormStore') @observer
class  TextFieldForm extends Component {
    capitalizeFirstLetter(string) {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }   
    handleChange(e) {
        if (this.props.uploadFormStore['set' + this.capitalizeFirstLetter(this.props.name)]) {
            this.props.uploadFormStore['set' + this.capitalizeFirstLetter(this.props.name)](e.target.value);
        } else if (this.props.uploadFormStore.setForm) {
            var args = {}
            args[this.props.name] = e.target.value
            this.props.uploadFormStore.setForm(args)
        }
    }

    componentDidMount() {
    }
    render() {
        var hint;
        if (this.props.type === undefined) {
            hint = 'choose a ' + this.props.name;
        }
        console.warn(this.props.type)
        return(
            <div>
                <TextField
                    id={this.props.name}
                    name={this.props.name}
                    hintText= {hint}
                    style = {this.props.style}
                    floatingLabelText={this.props.name}
                    floatingLabelFixed={true}
                    type = {this.props.type}
                    step={this.props.step}
                    min={this.props.min}
                    max={this.props.max}
                    multiLine={this.props.multiLine ? true : false}
                    rows={this.props.rows ? this.props.rows : 1}
                    rowsMax={this.props.rowsMax ? this.props.rowsMax : 1}
                    onChange={this.handleChange.bind(this)}
                />
            </div>
        )
    }
}

export default TextFieldForm;
