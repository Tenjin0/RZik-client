import React , {Component} from 'react';
import DevTool, { configureDevtool } from 'mobx-react-devtools';
import {autorun, observable} from 'mobx';
import userStore from '../stores/userStore';
import trackStore from '../stores/trackStore';
import injectTapEventPlugin from 'react-tap-event-plugin';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { browserHistory, Router, Route,  hashHistory, IndexRoute } from 'react-router';

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

// console.warn('toto');
export default class App extends Component {
    constructor() {
        super();
    }
    
    render() {

        return (
            <div>
            Hell
            </div>
        );
    }
}
