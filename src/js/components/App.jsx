import React , {Component} from 'react';
import DevTool, { configureDevtool } from 'mobx-react-devtools';
import {autorun, observable} from 'mobx';
import { Switch, Route, BrowserRouter } from 'react-router-dom'
import { Router, IndexRoute } from 'react-router';
import Login from './Login';
import MyUploads from './uploads/MyUploads';
import Upload from './uploads/Upload';
import Home    from './Home';
import MainLayout    from './layouts/MainLayout';
import AuthLayout    from './layouts/AuthLayout';
import NotFound    from './NotFound';
import Playlist    from './Playlist';

import Registration from "./Registration/index";

require('font-awesome/css/font-awesome.css');
require('flexboxgrid/css/flexboxgrid.css');

if (process.env.NODE_ENV !== 'production') {
    // Any configurations are optional
  configureDevtool({
    // Turn on logging changes button programmatically:
    logEnabled: true,
    // Turn off displaying conponents' updates button programmatically:
    updatesEnabled: false,
    // Log only changes of type `reaction`
    // (only affects top-level messages in console, not inside groups)
    logFilter: change => change.type === 'reaction',
  });
}
export default class App extends Component {
    constructor(props, context) {
        super(props, context);
    }

  render() {
    return (
      <BrowserRouter>
        <div>
          <Switch>
            <AuthLayout exact path="/login" component={Login}/>
            <AuthLayout exact path='/register' component={Registration}/>
            <MainLayout exact path='/' component={Home}/>
            <MainLayout exact path='/uploads' component={MyUploads}/>
            <MainLayout exact path='/uploads/new' component={Upload}/>
            <MainLayout exact path='/uploads/:number([0-9]+)' component={Upload}/>
            <MainLayout exact path='/playlist' component={Playlist}/>
            <Route component={NotFound}/>
          </Switch>
          <DevTool />
        </div>
      </BrowserRouter>
    );
  }
}
