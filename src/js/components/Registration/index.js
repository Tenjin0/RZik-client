import React, {Component} from 'react';
import {observer, inject} from "mobx-react";
import {createUserCb, createUser} from "../../actions/user";
import TextField from 'material-ui/TextField';

@inject(['registerStore']) @observer
export default class Registration extends Component {

  register(event) {
    event.preventDefault();

    if (this.props.registerStore.isFullfilled) {
      createUser().then(response => {
        console.log('USER REGISTERED ', response);
      }).catch(err => {
        if(err.code = 102) {
        } else {
        }
        console.log(err);
      });

    } else {
      alert('Tous les champs sont obligatoires');
    }
  }

  onChange(event) {
    let fieldName = event.target.name;
    this.props.registerStore[fieldName] = event.target.value;
  }


  render() {
    const {email, emailConfirmation, passwordConfirmation, password} = this.props.registerStore;
    return (
      <div>
        <form onSubmit={this.register.bind(this)}>
          <div>
            
            <TextField
                name="email"
                floatingLabelText="YOUR EMAIL"
                floatingLabelStyle= {{ color : "white"}}
                type = "email"
                onChange={this.onChange.bind(this)}            
                value={this.props.registerStore.email}
            /><TextField
                name="emailConfirmation"
                floatingLabelText="Email Confirmation"
                floatingLabelStyle= {{ color : "white"}}
                type = "email"
                onChange={this.onChange.bind(this)}            
                value={emailConfirmation}
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
                /><TextField
                    name="passwordConfirmation"
                    floatingLabelStyle= {{ color : "white"}}
                    floatingLabelText="Password Confirmation"
                    type = "password"
                    onChange={this.onChange.bind(this)}            
                    value={passwordConfirmation}
                />
                </div>
          <button>S'inscrire</button>
        </form>
      </div>
    )
  }
}
