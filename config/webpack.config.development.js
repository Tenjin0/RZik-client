let webpack = require('webpack');
let NODE_ENV = process.env.NODE_ENV;
let port = process.env.PORT || '8080';
let path = require('path');
let ExtractTextPlugin = require("extract-text-webpack-plugin");

const GLOBALS = {
  'process.env': {
    'NODE_ENV': JSON.stringify(NODE_ENV)
  },
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
                use: [
                    'style-loader',
                    // Using source maps breaks urls in the CSS loader
                    // https://github.com/webpack/css-loader/issues/232
                    // This comment solves it, but breaks testing from a local network
                    // https://github.com/webpack/css-loader/issues/232#issuecomment-240449998
                    // 'css-loader?sourceMap',
                    'css-loader',
                    // 'postcss-loader',
                    'sass-loader?sourceMap',
                ]
            },
            {
                test: /\.(jpe?g|png|gif|svg)$/i,
                use: [
                    "file-loader?hash=sha512&digest=hex&name=[hash].[ext]",
                    {
                        loader: "image-webpack-loader",
                        options: {
                            progressive: true,
                            optimizationLevel: 7,
                            interlaced: false,
                            pngquant: {
                                quality: "65-90",
                                speed: 4
                            }
                        }
                    }
                ]
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
            'fetch': 'imports?this=>global!exports?global.fetch!whatwg-fetch', // fetch API
            'jQuery': 'jquery',
            '$': "jquery",
            'React': 'react',
        }),
        new webpack.DefinePlugin(GLOBALS),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoEmitOnErrorsPlugin(),
        
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
