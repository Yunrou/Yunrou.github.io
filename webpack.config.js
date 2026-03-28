const path = require('path');
module.exports = {
    // define entry file and output
    entry: './src/index.js',
    output: {
        path: path.resolve('static'),
        publicPath: '/',
        filename: 'main.js'
    },
    devServer: {
        contentBase: './static',
        host: '127.0.0.1',
        port: 8000,
        open: true
    },
    // define babel loader
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: ['babel-loader']
            }
        ]
    }
}