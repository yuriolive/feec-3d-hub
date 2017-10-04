const Path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const config = {
    entry: './src/index.jsx',
    devServer: {
        inline: true,
        contentBase: './dist',
        port: process.env.PORT || 8080,
        host: process.env.IP || '0.0.0.0',
        historyApiFallback: true,
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
                        presets: ['es2015', 'react', 'stage-3']
                    }
                }]
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            },
            {
                test: /\.(gif|png|jpe?g|svg|webp)$/,
                use: [
                    'file-loader', {
                        loader: 'image-webpack-loader',
                        options: {
                            gifsicle: {
                                interlaced: false,
                            },
                            optipng: {
                                optimizationLevel: 7,
                            },
                            pngquant: {
                                quality: '65-90',
                                speed: 4
                            },
                            mozjpeg: {
                                progressive: true,
                                quality: 65
                            },
                            // Specifying webp here will create a WEBP version of your JPG/PNG images
                            webp: {
                                quality: 75
                            }
                        }
                    }
                ]
            }
        ]
    },
    resolve: {
        extensions: ['.js', '.jsx']
    },
    plugins: [new HtmlWebpackPlugin({
        title: 'Custom template',
        template: './templates/index.ejs', // Load a custom template (ejs by default see the FAQ for details),
      })],
    output: {
        filename: 'bundle.[hash].js',
        path: Path.resolve(__dirname, 'dist'),
        publicPath: '/'
    }
};

if (process.env.NODE_ENV !== 'production') {
    config.devServer.public = 'learn-redux-yuriolive.c9users.io';
}
else {
    config.plugins.push(
        new webpack.optimize.OccurrenceOrderPlugin(),
        new webpack.optimize.UglifyJsPlugin()
    );
}


module.exports = config;