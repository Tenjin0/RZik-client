import React, {Component} from 'react';
import {observer, inject} from "mobx-react";
import {createUserCb, createUser} from "../../actions/user";

@inject(['registerStore']) @observer
export default class Registration extends Component {

  register(event) {
    event.preventDefault();

    if (this.props.registerStore.isFullfilled) {
/*      createUserCb(err, result => {
        if (result) {
          alert('Inscription effectué');
        } else {
          alert('Error');
        }
      });*/

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
          <input name="email" type="email" value={email} onChange={this.onChange.bind(this)} placeholder="Email" required/>
          <input name="emailConfirmation" type="email" value={emailConfirmation} onChange={this.onChange.bind(this)}
                 placeholder="Email Confirmation" required/>
          <input name="password" type="password" value={password} onChange={this.onChange.bind(this)}
                 placeholder="Password" required/>
          <input name="passwordConfirmation" type="password" value={passwordConfirmation}
                 onChange={this.onChange.bind(this)}
                 placeholder="Password Confirmation" required/>
          <button>S'inscrire</button>
        </form>
      </div>
    )
  }
}
