'use strict';

const HtmlWebpackPlugin = require('html-webpack-plugin');
const readConfig = require('read-config');
const path = require('path');

// base config
const SRC = './src';
const DEST = './public';
const HOST = process.env.HOST || '0.0.0.0';
const PORT = process.env.PORT || 3000;

const constants = readConfig(`${SRC}/constants.yml`);
const { BASE_DIR } = constants;

module.exports = {
    // エントリーファイル
    entry: `${SRC}/index.tsx`,
    // 出力するディレクトリ・ファイル名などの設定
    output: {
        path: path.resolve(__dirname, DEST + BASE_DIR),
        filename: '[name]',
        publicPath: BASE_DIR,
    },
    module: {
        // 各ファイル形式ごとのビルド設定
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
    // webpack-dev-serverの設定
    devServer: {
        host: HOST,
        port: PORT,
        contentBase: DEST,
        openPage: path.relative('/', BASE_DIR),
    },
    // キャシュ有効化
    cache: true,
    // 拡張子省略時のpath解決
    resolve: {
        extensions: ['.js', '.ts', '.tsx', '.json', '*'],
        alias: {
            '~': path.join(__dirname, SRC),
        },
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: `${DEST}/index.html`,
        }),
    ],
};
