import React, { Component } from 'react';
import {observer, inject} from "mobx-react";
import {login} from "../actions/session";
import {Redirect } from 'react-router-dom'

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
              <div>
                {this.state.fireRedirect ?
                    <Redirect to="/" push/> : ""
                }
                <form onSubmit={this.handleLogin.bind(this)}>
                <input name="email" type="email" value={email} onChange={this.onChange.bind(this)} placeholder="Email" required/>
                <input name="password" type="password" value={password} onChange={this.onChange.bind(this)}
                        placeholder="Password" required/>
                <button>Login</button>
                </form>
            </div>
        );
    }
}

export default Login;
