module.exports = {
    entry: './script.js',
    output: {filename: 'bundle.js'},
    module: {
        loaders: [
            {test: /\.js?/, loader: 'babel-loader', exlude: /node_modules/}
        ]
    }
};