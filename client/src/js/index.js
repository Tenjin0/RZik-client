import React from 'react'
import ReactDOM from 'react-dom'
import App from './components/App.jsx'
import { AppContainer } from 'react-hot-loader'
import DevTool, { configureDevtool } from 'mobx-react-devtools';

// Any configurations are optional
if (process.env.NODE_ENV !== 'production') {
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
  module.hot.accept('./components/App', () => { render(App) })
}
