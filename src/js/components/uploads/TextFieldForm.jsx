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

    onInputYear(e) {
        console.warn(e.target.value);
        e.target.value = Math.max(0, parseInt(e.target.value) ).toString().slice(0,4)
    }
    componentDidMount() {
    }
    
    shouldComponentUpdate(nextProps, nextState) {
        return true
    }
    render() {
        var hint;
        if (this.props.type === undefined) {
            hint = 'choose a ' + this.props.name;
        } else {
            hint = this.props.placeholder
        }
        // if (!this.props.uploadFormStore.form.get(this.props.name)) {
        //     hint = null;
        // }
        var type;
        if (this.props.type === 'year') {
            type= "number";
        } else {
            type = this.props.type;
        }
        var styleErrors = {}
        if (this.props.uploadFormStore.errors.get(this.props.name).length > 0) {
            styleErrors.marginBottom = "-20px"
        }
        return(
                    
            <div style={ styleErrors }>
                <TextField
                    id={this.props.name}
                    name={this.props.name}
                    hintText= {hint}
                    hintStyle= {{ color : "grey" }}
                    style = {this.props.style}
                    inputStyle= {{ backgroundColor:"black !important" , color : "white  !important"}}
                    floatingLabelStyle= {{ color : "white"}}
                    floatingLabelText={this.props.name}
                    floatingLabelFixed={true}
                    type = {type}
                    step={this.props.step}
                    min={this.props.min}
                    max={this.props.max}
                    multiLine={this.props.multiLine ? true : false}
                    maxLength = {this.props.maxlength}
                    rows={this.props.rows ? this.props.rows : 1}
                    rowsMax={this.props.rowsMax ? this.props.rowsMax : 1}
                    onChange={this.handleChange.bind(this)}
                    onInput={this.props.type === 'year' ? this.onInputYear.bind(this): () => {}}
                    errorText= {this.props.uploadFormStore.errors.get(this.props.name)}
                    value={this.props.uploadFormStore.form.get(this.props.name)}
                />
            </div>
        )
    }
}

export default TextFieldForm;
