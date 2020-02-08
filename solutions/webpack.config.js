const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = [{
    entry: {
        part_one: path.join(__dirname, "./src/part_one", 'index.js')
    },
    watch: true,
    mode: 'development',
    output: {
        path: path.resolve(__dirname, './src/part_one/dist'),
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
            title: 'Rest API',
            meta: {
                'viewport': 'width=device-width, initial-scale=1, shrink-to-fit=no',
            }
        })
    ]
}, {
    entry: {
        part_two: path.join(__dirname, "./src/part_two", 'index.js')
    },
    output: {
        path: path.resolve(__dirname, './src/part_two/dist'),
        filename: '[name].bundle.js',
    },
    watch: true,
    mode: 'development',
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
            title: 'Filtering',
            meta: {
                'viewport': 'width=device-width, initial-scale=1, shrink-to-fit=no',
            }
        })
    ]
}, {
    entry: {
        part_three: path.join(__dirname, "./src/part_three", 'index.js')
    },
    output: {
        path: path.resolve(__dirname, './src/part_three/dist'),
        filename: '[name].bundle.js',
    },
    watch: true,
    mode: 'development',
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
            title: 'Paging and Dynamic Layout',
            meta: {
                'viewport': 'width=device-width, initial-scale=1, shrink-to-fit=no',
            }
        })
    ]
}
];