import React, { Component } from 'react';
import {observer, inject} from "mobx-react";
import {login} from "../actions/session";
import {Redirect } from 'react-router-dom'
import TextField from 'material-ui/TextField';

@inject('registerStore', 'sessionStore') @observer
class Login extends Component {
    constructor(props, context) {
        super(props, context);
        this.state = { fireRedirect : false
        };
    }

    handleLogin(e) {
        e.preventDefault()
        login(this.props.sessionStore, this.props.registerStore.email, this.props.registerStore.password)
        .then((response) => {
            this.setState({fireRedirect : true});
        })
        .catch((err) => {
            console.warn(err)
        })
    }
    onChange(event) {
        let fieldName = event.target.name;
        this.props.registerStore[fieldName] = event.target.value;
    }

    render() {
        const {email, password} = this.props.registerStore;
        return (
              <div className="login-container">
                {this.state.fireRedirect ?
                    <Redirect to="/" push/> : ""
                }
                <form onSubmit={this.handleLogin.bind(this)}>
                <div>
                    <TextField
                        name="email"
                        floatingLabelText="YOUR EMAIL"
                        floatingLabelStyle= {{ color : "white"}}
                        type = "email"
                        onChange={this.onChange.bind(this)}            
                        value={this.props.registerStore.email}
                    />
                </div>
                <div>
                <TextField
                    name="password"
                    floatingLabelStyle= {{ color : "white"}}
                    floatingLabelText="password"
                    type = "password"
                    onChange={this.onChange.bind(this)}            
                    value={this.props.registerStore.password}
                />
                </div>
                <button className=""><i>CONNEXION</i></button>
                </form>
            </div>
        );
    }
}

export default Login;
