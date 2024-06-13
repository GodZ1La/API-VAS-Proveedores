const { merge } = require('webpack-merge');
const singleSpaDefaults = require('webpack-config-single-spa-react');
const Dotenv = require('dotenv-webpack');
const fs = require('fs');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = (webpackConfigEnv, argv) => {
  const defaultConfig = singleSpaDefaults({
    orgName: 'Vas',
    projectName: 'mf-xtend',
    webpackConfigEnv,
    argv,
  });

  return merge(defaultConfig, {
    devtool: 'eval-source-map',
    plugins: [
      new MiniCssExtractPlugin(),
      new Dotenv({
        path: './config/.env',
      }),
    ],
    module: {
      rules: [
        {
          test: /\.m?js/,
          type: 'javascript/auto',
          resolve: {
            fullySpecified: false,
          },
        },
        {
          test: /\.(ts|tsx|js|jsx)$/,
          exclude: /node_modules/,
          use: {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-env', '@babel/preset-react'],
            },
          },
        },
        {
          test: /\.s[ac]ss$/i,
          use: ['style-loader', 'css-loader', 'sass-loader'],
        },
        {
          test: /\.(woff|woff2|ttf|eot)$/,
          use: 'file-loader?name=fonts/[name].[ext]!static',
        },
      ],
    },
    resolve: {
      extensions: ['.tsx', '.ts', '.jsx', '.js', '.json'],
    },
  });
};
