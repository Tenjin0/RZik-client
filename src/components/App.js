import React, {Component} from 'react';
import Header from './Header';
import Footer from './Footer';
import Registration from './Registration';
import RegistrationStore from '../stores/RegisterStore';

import './App.scss';

export default class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Registration store={RegistrationStore} />
        <Footer />
      </div>
    )
  }
}
