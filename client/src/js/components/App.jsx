import React , {Component} from 'react';
import DevTool, { configureDevtool } from 'mobx-react-devtools';
import {autorun, observable} from 'mobx';
import userStore from '../stores/userStore';
import trackStore from '../stores/trackStore';

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
    constructor() {
        super();
    }
    
    render() {

        return (
            <div>
                { process.env.NODE_ENV !== 'production' ? <DevTool /> : "" }
            </div>
        );
    }
}
