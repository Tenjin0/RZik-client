import React, {Component} from 'react';
import {observer} from "mobx-react";
import { createUser } from "../../actions/user";

@observer
export default class Registration extends Component {

  register() {
    if (this.props.store.isFullfilled) {
      if(createUser()) {
        alert('Inscription effectué');
      }else {
        alert('Error');
      }
    } else {
      alert('Tous les champs sont obligatoires');
    }
  }

  onChange(event) {
    let fieldName = event.target.name;
    this.props.store[fieldName] = event.target.value;
  }

  render() {
    const {lastname, firstname, email, emailConfirmation, passwordConfirmation, password} = this.props.store;

    return (
      <div>
        Registration pour {firstname} {lastname}
        <p>
          <input name="firstname" type="text" value={firstname} onChange={this.onChange.bind(this)}
                 placeholder="Prénom"/>
          <input name="lastname" type="text" value={lastname} onChange={this.onChange.bind(this)} placeholder="Nom"/>
          <input name="email" type="email" value={email} onChange={this.onChange.bind(this)} placeholder="Email"/>
          <input name="emailConfirmation" type="email" value={emailConfirmation} onChange={this.onChange.bind(this)}
                 placeholder="Email Confirmation"/>
          <input name="password" type="password" value={password} onChange={this.onChange.bind(this)}
                 placeholder="Password"/>
          <input name="passwordConfirmation" type="password" value={passwordConfirmation}
                 onChange={this.onChange.bind(this)}
                 placeholder="Password Confirmation"/>
        </p>
        <button onClick={this.register.bind(this)}>S'inscrire</button>
      </div>
    )
  }
}
