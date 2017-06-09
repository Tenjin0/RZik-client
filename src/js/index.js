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

import {MobxIntlProvider, LocaleStore} from "mobx-react-intl"
import { addLocaleData } from 'react-intl';
import en from 'react-intl/locale-data/en';
import fr from 'react-intl/locale-data/fr';
import translationsEn from './../translations/en.js';
import translationsfr from './../translations/fr.js';
addLocaleData([...en, ...fr]);

var language = 'en';
const localeStore = new LocaleStore(language, {en : translationsEn, fr : translationsfr});
localeStore.value = language

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
              <Provider { ...stores } locale={localeStore}>
                <MobxIntlProvider>
                  <App />
                </MobxIntlProvider>
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
