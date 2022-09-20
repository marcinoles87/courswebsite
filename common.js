const path = require('path').resolve;
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: {
        index: path(_dirname, '.','src',index.js),
    },

    output: {
        filename: '[name].[contenthash:6].js',
        path: path(_dirname, '.', 'build'),
    },

    resolve: {
        extensions: ['.js' , '.jsx'],
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                }

            }
        ]
    },

    plugin: [
        new HtmlWebpackPlugin ( {
            template: path(_dirname, '.' , 'public' , 'index.html')
        })
    ]
}
