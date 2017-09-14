const Path = require('path');

module.exports = {
    entry: './src/index.jsx',
    devServer: {
        inline: true,
        contentBase: './dist',
        port: process.env.PORT || 8080,
        host: process.env.IP || '0.0.0.0',
        public: 'learn-redux-yuriolive.c9users.io'
    },
    module: {
        rules: [{
                test: /\.(js|jsx)$/,
                exclude: /(node_modules|bower_components)/,
                enforce: "pre",
                use: [{
                    loader: 'eslint-loader'
                }]
            },
            {
                test: /\.(js|jsx)$/,
                exclude: /(node_modules|bower_components)/,
                use: [{
                    loader: 'babel-loader',
                    options: {
                        presets: ['es2015', 'react']
                    }
                }]
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            }
        ]
    },
    resolve: {
        extensions: ['.js', '.jsx']
    },
    output: {
        filename: 'bundle.js',
        path: Path.resolve(__dirname, 'dist')
    }
};