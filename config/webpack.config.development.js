let webpack = require('webpack');
let port = process.env.PORT || '8080';
let path = require('path');

let NODE_ENV = process.env.NODE_ENV;
const API_PORT = process.env.API_PORT || '3001';
const API_HOST = process.env.API_HOST || 'localhost';
let API_URL = `http://${API_HOST}:${API_PORT}`;

let ExtractTextPlugin = require("extract-text-webpack-plugin");
const GLOBALS = {
  'process.env': {
    'NODE_ENV': JSON.stringify(NODE_ENV)
  },
  'API_URL' : JSON.stringify(API_URL),
  __DEV__: JSON.stringify(JSON.parse(process.env.DEBUG || 'true'))
};

module.exports = {
  // the entry file for the bundle
  
    entry: ['webpack-hot-middleware/client?path=/__webpack_hmr&timeout=20000', 'react-hot-loader/patch', 'index.js'],
    output: {
        filename: 'js/[name].js',
        path: path.resolve(__dirname, '../build'),
        publicPath: '/'
    },
    resolve: {
        modules: [
            path.join(__dirname, '../src/js'),
            // path.join(__dirname, '../src/assets/scripts'),
            'node_modules'
        ],
        // alias: {
        //     models: path.join(__dirname, '../srcs/assets/js/models')
        // },
        extensions: ['.js', '.jsx', '.json', '.scss']
    },
    module: {
        loaders: [
            {
                test: /.jsx?$/,
                loader: 'babel-loader',
                exclude: /node_modules/,
                query: { "presets": [
                    "es2015",
                    "react",
                    "stage-2"
                    ],
                    "plugins": [
                    "transform-decorators-legacy",
                    "transform-class-properties"
                    ] 
                }
            },
            {
                test: /\.scss$/,
                exclude: /node_modules/,
                use: ExtractTextPlugin.extract({ fallback: 'style-loader', use: ['css-loader','sass-loader?sourceMap'] })

                // use: [
                //     'style-loader',
                //     // Using source maps breaks urls in the CSS loader
                //     // https://github.com/webpack/css-loader/issues/232
                //     // This comment solves it, but breaks testing from a local network
                //     // https://github.com/webpack/css-loader/issues/232#issuecomment-240449998
                //     // 'css-loader?sourceMap',
                //     'css-loader',
                //     // 'postcss-loader',
                //     'sass-loader?sourceMap',
                // ]
            },
            { test: /(\.css$)/, loaders: ['style-loader', 'css-loader'], include: [/flexboxgrid/, /font-awesome/]},

            {
            test: /\.(jpe?g|gif|png|eot|svg|woff2|ttf)$/,
                loaders: ['file-loader?context=src/images&name=images/[path][name].[ext]', {
                    loader: 'image-webpack-loader',
                    query: {
                        mozjpeg: {
                            progressive: true,
                        },
                        gifsicle: {
                            interlaced: false,
                        },
                        optipng: {
                            optimizationLevel: 4,
                        },
                        pngquant: {
                            quality: '75-90',
                            speed: 3,
                        }
                    }
                }],
            },
            {
                test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
                use: "url-loader?limit=10000&mimetype=application/font-woff"
            },
            {
                test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
                use: "file-loader"
            }
        ]
    },
    plugins: [
        new webpack.optimize.OccurrenceOrderPlugin(),
        new webpack.ProvidePlugin({
            // 'fetch': 'imports?this=>global!exports?global.fetch!whatwg-fetch', // fetch API
            '$': "jquery",
            'React': 'react',
            'axios': 'axios',
        }),
        new webpack.DefinePlugin(GLOBALS),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoEmitOnErrorsPlugin(),
        new ExtractTextPlugin("app.css"),

        new webpack.LoaderOptionsPlugin({
            debug: true,   
            options: {
                postcss: function () {
                    return [
                        autoprefixer({
                            browsers: ['last 2 versions']
                        })
                    ];
                }
            }
       })


    ],
    cache: true,
    devtool: 'cheap-module-eval-source-map'
    
};
