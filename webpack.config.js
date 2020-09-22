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
        contentBase: './static'
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