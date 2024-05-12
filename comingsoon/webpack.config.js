import { resolve } from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';
import HtmlWebpackPlugin from 'html-webpack-plugin';

const __dirname = dirname( fileURLToPath( import.meta.url ) );
export default {
    // https://webpack.js.org/concepts/entry-points/ - starting point of webpack 
    entry: {
        app: './app.ts'
    },
    // https://webpack.js.org/configuration/watch/ - ignore node_module to watch 
    watchOptions: {
        ignored: [ 'test/**', '**/node_modules' ],
    },
    // https://webpack.js.org/guides/caching/ - splitchunks will create different files for individual modules. For node_module, webpack will create fixed hash file named as vendors and add all third party code in that file. Hash will not change on every build. 
    optimization: {
        moduleIds: 'deterministic',
        splitChunks: {
            cacheGroups: {
                vendor: {
                    test: /[\\/]node_modules[\\/]/,
                    name: 'vendors',
                    chunks: 'all',
                },
            },
        },
    },
    // https://webpack.js.org/configuration/output/ - path to resolve main folder. filename will create bundles based on given format. clean will clean the output directory before emit.
    output: {
        path: resolve( __dirname, 'dist/' ),
        filename: '[name].[contenthash].js',
        clean: true
    },
    // https://webpack.js.org/configuration/resolve/
    resolve: {
        extensions: [ '.ts', '.js', '.html' ],
    },
    // https://webpack.js.org/concepts/modules/ - modules will load files as per given loaders.
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/,
            },
            {
                test: /\.m?js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: [ '@babel/preset-env' ]
                    }
                }
            },
            {
                test: /\.html$/i,
                loader: 'html-loader',
            }
        ],
    },
    plugins: [
        // https://webpack.js.org/plugins/html-webpack-plugin/
        new HtmlWebpackPlugin( {
            template: './src/index.html'
        } ),
    ],
    mode: 'production',
    // https://webpack.js.org/configuration/devtool/
    devtool: 'source-map'
};