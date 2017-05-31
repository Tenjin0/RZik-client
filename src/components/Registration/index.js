import React, {Component} from 'react';
import {observer} from "mobx-react";
import {createUser} from "../../actions/user";

@observer
export default class Registration extends Component {

  register(event) {
    event.preventDefault();
    if (this.props.store.isFullfilled) {
      if (createUser()) {
        alert('Inscription effectué');
      } else {
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
        <form onSubmit={this.register.bind(this)}>
          <input name="firstname" type="text" value={firstname} onChange={this.onChange.bind(this)}
                 placeholder="Prénom" required/>
          <input name="lastname" type="text" value={lastname} onChange={this.onChange.bind(this)} placeholder="Nom" required/>
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
