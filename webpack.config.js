const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const webpack = require('webpack');
const Dotenv = require('dotenv-webpack');

// Determinamos si estamos en modo producción
const isProduction = process.env.NODE_ENV === 'production';

module.exports = {
    // Este es el punto de entrada de tu aplicación
    entry: './src/index.js',

    // Configuración de salida
    output: {
        filename: isProduction ? 'bundle.[contenthash].js' : 'bundle.js',
        path: path.resolve(__dirname, 'build'),
        publicPath: '/',
    },

    // Aquí configuramos las reglas para manejar diferentes tipos de archivos
    module: {
        rules: [
            {
                // Usa babel-loader para transpilar archivos JavaScript
                test: /\.js$/,
                exclude: /node_modules/,
                use: 'babel-loader',
            },
            {
                // Usa loaders para CSS y PostCSS
                test: /\.css$/,
                use: [
                    isProduction ? MiniCssExtractPlugin.loader : 'style-loader',
                    'css-loader',
                    'postcss-loader',
                ],
            },
            {
                // Usa loaders para SCSS
                test: /\.scss$/,
                use: [
                    isProduction ? MiniCssExtractPlugin.loader : 'style-loader',
                    'css-loader',
                    'postcss-loader',
                    'sass-loader',
                ],
            },
            {
                // Usa loaders para archivos de imagen
                test: /\.(png|svg|jpg|jpeg|gif)$/i,
                type: 'asset/resource',
                generator: {
                    filename: 'images/[name].[contenthash][ext]',
                },
            },
            {
                // Usa loaders para fuentes
                test: /\.(woff|woff2|eot|ttf|otf)$/i,
                type: 'asset/resource',
                generator: {
                    filename: 'fonts/[name].[contenthash][ext]',
                },
            },
        ],
    },

    // Configuración de plugins
    plugins: [
        // Limpia el directorio de salida antes de cada build
        new CleanWebpackPlugin(),

        // Extrae CSS en archivos separados
        new MiniCssExtractPlugin({
            filename: '[name].[contenthash].css',
        }),

        // Genera un archivo HTML e incluye los bundles
        new HtmlWebpackPlugin({
            template: './public/index.html',
            favicon: './public/favicon.ico', // Añade favicon si está disponible
            minify: isProduction ? {
                collapseWhitespace: true,
                removeComments: true,
                removeRedundantAttributes: true,
                useShortDoctype: true,
                removeEmptyAttributes: true,
                removeStyleLinkTypeAttributes: true,
                keepClosingSlash: true,
                minifyJS: true,
                minifyCSS: true,
                minifyURLs: true,
            } : false,
        }),

        // Plugin para cargar variables de entorno
        new Dotenv(),

        // Proporciona variables de entorno a la aplicación
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV),
        }),
    ],

    // Configuración de optimización
    optimization: {
        minimize: isProduction,
        minimizer: [
            new TerserPlugin({
                parallel: true,
                terserOptions: {
                    compress: {
                        drop_console: true, // Remueve los console.logs en producción
                    },
                },
            }),
            new CssMinimizerPlugin(),
        ],
        splitChunks: {
            chunks: 'all',
        },
        runtimeChunk: 'single',
    },

    // Configuración de DevServer para modo desarrollo
    devServer: {
        contentBase: path.resolve(__dirname, 'build'),
        historyApiFallback: true,
        open: true,
        compress: true,
        hot: true,
        port: 3000,
    },

    // Configuración de source maps para mejor depuración
    devtool: isProduction ? 'source-map' : 'eval-source-map',

    // Resolución de extensiones y alias
    resolve: {
        extensions: ['.js', '.jsx'],
        alias: {
            '@components': path.resolve(__dirname, 'src/components'),
            '@assets': path.resolve(__dirname, 'src/assets'),
        },
    },

    // Indicaciones de rendimiento
    performance: {
        hints: isProduction ? 'warning' : false,
    },
};
