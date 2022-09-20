const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCssAssetsWebpackPlugin = require('optimize-css-assets-webpack-plugin');

module.exports = {
    optimization : {
        minimizer: [
            new OptimizeCssAssetsWebpackPlugin({}),
        ]
    }
}