const path = require('path');

module.exports = {
    entry: 'index.js',
    output: {
        path: 'dist',
        filename: 'bundle.js',
    },
    module: {
        rules: [
            { test: /\.handlebars$/, loader: `${__dirname}/../` }
        ]
    }
}