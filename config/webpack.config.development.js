let webpack = require('webpack');
let NODE_ENV = process.env.NODE_ENV;
let port = process.env.PORT || '8080';
let path = require('path');

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
        path: path.resolve(__dirname, '../client/build'),
        publicPath: '/'
    },
    resolve: {
        modules: [
            path.join(__dirname, '../client/src/js'),
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
