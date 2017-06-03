import ReactDOM from 'react-dom'
// import { AppContainer } from 'react-hot-loader'
// import injectTapEventPlugin from 'react-tap-event-plugin';

import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';

import { Provider } from "mobx-react";

import App from './components/App.jsx'
import * as stores from './stores';
console.warn(stores)
console.warn(...stores)
// TODO ROUTER, MATERIAL-UI
const render = () => {
  ReactDOM.render(
          <MuiThemeProvider muiTheme={getMuiTheme(darkBaseTheme)}>
            <Provider store={stores}>
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
