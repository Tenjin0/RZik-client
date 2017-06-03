import ReactDOM from 'react-dom'
import App from './components/App.jsx'
import { AppContainer } from 'react-hot-loader'
import injectTapEventPlugin from 'react-tap-event-plugin';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { Router, IndexRoute } from 'react-router';
import { Switch, Route, BrowserRouter } from 'react-router-dom'
import DevTool, { configureDevtool } from 'mobx-react-devtools';
import { Provider } from "mobx-react";
import * as stores from './stores';
console.warn(stores)
// TODO ROUTER, MATERIAL-UI
const render = () => {
  ReactDOM.render(
          <MuiThemeProvider muiTheme={getMuiTheme()}>
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
