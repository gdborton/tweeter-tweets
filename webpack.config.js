var webpack = require('webpack');
var config = {
    entry: ['./src/js/components/app.jsx'],
    debug: true,
    devtool: 'source-map',
    output: {
        path: __dirname + '/dist/js',
        publicPath: '/dist/',
        filename: "dist.bundle.js"
    },
    module: {
        loaders: [
          { test: /\.jsx$/, loaders: ['react-hot', 'babel']},
          { test: /\.js$/, loaders: ['react-hot', 'babel'], exclude: /node_modules/}
        ]
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new webpack.DefinePlugin({
            'process.env': {'NODE_ENV': JSON.stringify('development')}
        })
    ],
    resolve: {
      extensions: ['', '.js', '.jsx']
    }
};

module.exports = config;
