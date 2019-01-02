'use strict';

const HtmlWebpackPlugin = require('html-webpack-plugin');
const autoprefixer = require('autoprefixer');
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
                        loader: require.resolve('tslint-loader'),
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
                loader: require.resolve('ts-loader'),
                exclude: /node_modules/,
            },
            {
                test: /\.css$/,
                use: [
                    require.resolve('style-loader'),
                    {
                        loader: require.resolve('css-loader'),
                        options: {
                            importLoaders: 1,
                        },
                    },
                    {
                        loader: require.resolve('postcss-loader'),
                        options: {
                            // Necessary for external CSS imports to work
                            // https://github.com/facebookincubator/create-react-app/issues/2677
                            ident: 'postcss',
                            plugins: () => [
                                require('postcss-flexbugs-fixes'),
                                autoprefixer({
                                    browsers: [
                                        '>1%',
                                        'last 4 versions',
                                        'Firefox ESR',
                                        'not ie < 9', // React doesn't support IE8 anyway
                                    ],
                                    flexbox: 'no-2009',
                                }),
                            ],
                        },
                    },
                ],
            },
            {
                test: /\.(jpe?g|png|gif|svg)$/,
                loader: require.resolve('file-loader'),
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
