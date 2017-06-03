import ReactDOM from 'react-dom'
import App from './components/App.jsx'
import { AppContainer } from 'react-hot-loader'
import injectTapEventPlugin from 'react-tap-event-plugin';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { browserHistory, Router, Route,  hashHistory, IndexRoute } from 'react-router';


injectTapEventPlugin();

// TODO ROUTER, MATERIAL-UI
const render = Component => {
  ReactDOM.render(
        <App />,
    document.getElementById('root')
  )
}

render(App)

if (module.hot) {
  module.hot.accept('./components/App', () => { render(App) })
}
