import React, { Component } from 'react';
import {observer, inject} from "mobx-react";
import {login} from "../actions/session";
import {Redirect } from 'react-router-dom'
import Auth from '../services/auth'

@inject('sessionStore') @observer
class Logout extends Component {
    componentDidMount() {
        Auth.deauthenticateUser(this.props.sessionStore);
    }
    render() {
        return (
              <div>
                <Redirect to="/login" push/>
            </div>
        );
    }
}

export default Logout;
