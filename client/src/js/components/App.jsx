import React , {Component} from 'react';
import DevTool, { configureDevtool } from 'mobx-react-devtools';
import {autorun, observable} from 'mobx';
import { Switch, Route, BrowserRouter } from 'react-router-dom'
import { Router, IndexRoute } from 'react-router';
import Login from './Login.jsx';
import Register from './Register.jsx';
import UploadTrack from './Upload_track.jsx';
import Home    from './Home.jsx';
import MainLayout    from './MainLayout.jsx';
import AuthLayout    from './AuthLayout.jsx';
import NotFound    from './NotFound.jsx';
// if (process.env.NODE_ENV !== 'production') {
//     // Any configurations are optional
//   configureDevtool({
//     // Turn on logging changes button programmatically:
//     logEnabled: true,
//     // Turn off displaying conponents' updates button programmatically:
//     updatesEnabled: false,
//     // Log only changes of type `reaction`
//     // (only affects top-level messages in console, not inside groups)
//     logFilter: change => change.type === 'reaction',
//   });
// }
// console.warn('toto');

export default class App extends Component {
    constructor(props, context) {
        super(props, context);
        console.warn(this.props);
    }
    
    render() {

        return (
            <BrowserRouter>
                <div>
                        {/* both /roster and /roster/:number begin with /roster */}
                        <MainLayout exact path='/' component={Home}/>
                        <MainLayout path='/upload' component={UploadTrack}/>
                        <AuthLayout path="/login" component={Login} />
                        <AuthLayout path="/register" component={Register} />

                    <DevTool />
                </div>
            </BrowserRouter>
        );
    }
}
