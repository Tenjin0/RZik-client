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
import localeStore from './stores/localStore'
import {MobxIntlProvider} from "mobx-react-intl"

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
};

if (process.env.NODE_ENV === 'development') {
  window.stores = {...stores}; // access stores in browser console for DEBUG purpose
}

render()

if (module.hot) {
  module.hot.accept()
}






let filters = document.querySelector(".filters"), // the SVG that contains the filters
  defs = filters.querySelector("defs"), // the  element inside the SVG
  blur = defs.querySelector("#blur"), // the blur filter
  blurFilter = blur.firstElementChild; // the feGaussianBlur primitive


let context = new AudioContext();

// Here's where most of the work happens
function processAudio(e) {
  let buffer = e.inputBuffer.getChannelData(0);
  let out = e.outputBuffer.getChannelData(0);
  let amp = 0;

  // Iterate through buffer to get the max amplitude for this frame
  for (let i = 0; i < buffer.length; i++) {
    let loud = Math.abs(buffer[i]);
    if (loud > amp) {
      amp = loud;
    }
    // Write input samples to output unchanged
    out[i] = buffer[i];
  }

  // Calc the amp : x,y blur effect and apply it
  amp = amp * 2 + ',0';
  blurFilter.setAttribute("stdDeviation", amp);
}





window.addEventListener('load', _ => {

  // Seek song
/*  function seek(e) {
    let percent = e.offsetX / this.offsetWidth;
    audio.currentTime = percent * audio.duration;
    progressBar.value = percent / 100;
  }*/


  // get the audio element
  let audio = document.querySelector("#audioElement");
  // let progressBar = document.querySelector("progress");
  // progressBar.addEventListener("click", seek);

  if (audio) {
    audio.addEventListener('canplaythrough', _ => {
      let node = context.createMediaElementSource(audio);

      // create a node that will handle the animation, but won't alter the audio in any way
      let processor = context.createScriptProcessor(4096, 1, 1);
      processor.onaudioprocess = processAudio;

      // connect the audio element to the node responsible for the animation
      node.connect(processor);

      // connect the "animation" node to the output
      processor.connect(context.destination);
    });
  }
});

