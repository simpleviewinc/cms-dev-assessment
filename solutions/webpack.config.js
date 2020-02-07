const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = [{
    entry: {
        app: './src/part_one/index.js',
    },
    watch: true,
    mode: 'development',
    output: {
        path: path.resolve('./src/part_one/', 'dist'),
        filename: '[name].bundle.js',
    },
    module: {
        rules: [
            { test: /\.handlebars$/, loader: 'handlebars-loader' },
            { test: /\.css$/, use: ['style-loader', 'css-loader'] },
            { test: /\.(png|jpg|svg)/, use: ['file-loader'] }
        ]
    },
    plugins: [
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            title: 'Rest API'
        })
    ]
}];