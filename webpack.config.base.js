'use strict';

const HtmlWebpackPlugin = require('html-webpack-plugin');
const readConfig = require('read-config');
const path = require('path');

// base config
const SRC = './src';
const STATIC = './public';
const DEST = './dist';
const HOST = process.env.HOST || '0.0.0.0';
const PORT = process.env.PORT || 3000;

const constants = readConfig(`${SRC}/constants.yml`);
const { BASE_DIR } = constants;

module.exports = {
    entry: `${SRC}/index.tsx`,
    output: {
        path: path.resolve(__dirname, DEST + BASE_DIR),
        publicPath: BASE_DIR,
    },
    module: {
        rules: [
            /*
            {
                enforce: 'pre',
                test: /\.tsx?$/,
                use: [
                    {
                        loader: 'tslint-loader',
                        options: {
                            typeCheck: true,
                            fix: true,
                        },
                    },
                ],
            },
            */
            {
                test: /\.tsx?$/,
                loader: 'ts-loader',
                exclude: /node_modules/,
            },
            {
                test: /\.css$/,
                loader: 'css-loader',
            },
            {
                test: /\.(jpe?g|png|gif|svg)$/,
                loader: 'file-loader',
            },
        ],
    },
    devServer: {
        host: HOST,
        port: PORT,
        contentBase: STATIC,
        openPage: path.relative('/', BASE_DIR),
    },
    cache: true,
    resolve: {
        extensions: ['.js', '.ts', '.tsx', '.json', '*'],
        alias: {
            '~': path.join(__dirname, SRC),
        },
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: `${STATIC}/index.html`,
        }),
    ],
};
