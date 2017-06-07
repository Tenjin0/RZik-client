import ReactDOM from 'react-dom'
// import { AppContainer } from 'react-hot-loader'
import {grey900} from 'material-ui/styles/colors';

import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';

import { Provider } from "mobx-react";

import App from './components/App.jsx'
import { genderStore } from './stores';
import * as stores from './stores';
import './components/tap_events'
import '../scss/app.scss'

const muiTheme = getMuiTheme({
  palette: {
    color: grey900,
  },
  appBar: {
    height: 64,
  },
});
// TODO ROUTER, MATERIAL-UI
const render = () => {
  ReactDOM.render(
          <MuiThemeProvider muiTheme={muiTheme}>
            <Provider { ...stores }>
                  <App />
              </Provider>
          </MuiThemeProvider>
,
    document.getElementById('root')
  )
}

render()

if (module.hot) {
  module.hot.accept()
}
