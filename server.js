// Creates a hot reloading development environment

const path = require('path');
const express = require('express');
const webpack = require('webpack');
const webpackDevMiddleware = require('webpack-dev-middleware');
const webpackHotMiddleware = require('webpack-hot-middleware');
const DashboardPlugin = require('webpack-dashboard/plugin');
const config = require('./config/webpack.config.development');

const app = express();
const compiler = webpack(config);

// Apply CLI dashboard for your webpack dev server
compiler.apply(new DashboardPlugin());

const host = process.env.HOST || 'localhost';
const port = process.env.API_PORT || 3000;
const API_PORT = Number.parseInt(process.env.API_PORT) + 1;

function log() {
    arguments[0] = '\nWebpack: ' + arguments[0];
    console.log.apply(console, arguments);
}

app.use(webpackDevMiddleware(compiler, {
    noInfo: false,
    publicPath: config.output.publicPath,
    stats: {
        colors: true
    },
    historyApiFallback: true,
    proxy: {
      '/api/*': {
        target: `http://${host}:${API_PORT}`
      }
    }
}));

app.use(require("webpack-hot-middleware")(compiler, {
    log: console.log, path: '/__webpack_hmr', heartbeat: 10 * 1000,
}));

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, './src/index.html'));
});

app.listen(port, host, (err) => {
    if (err) {
        log(err);
        return;
    }

    log('🚧  App is listening at http://%s:%s', host, port);
});
