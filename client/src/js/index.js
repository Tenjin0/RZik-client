import ReactDOM from 'react-dom'
import App from './components/App.jsx'
import { AppContainer } from 'react-hot-loader'
import injectTapEventPlugin from 'react-tap-event-plugin';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { browserHistory, Router, Route,  hashHistory, IndexRoute } from 'react-router';
console.warn('toto')


// TODO ROUTER, MATERIAL-UI
const render = Component => {
  ReactDOM.render(
    <AppContainer>
        <App />
        </AppContainer>,
    document.getElementById('root')
  )
}

render(App)

if (module.hot) {
  module.hot.accept()
}
