'use strict';

const merge = require('webpack-merge');
const commonConfig = require('./webpack.common');
const MinCssPlugin = require('mini-css-extract-plugin');

const webpackProdConfig = {};
webpackProdConfig.module = {};
webpackProdConfig.mode = 'production';

webpackProdConfig.plugins = [
  new MinCssPlugin ({
    filename: '[name].[hash].css'
  })
];

webpackProdConfig.module.rules = [{
  test: /\.scss$/,
  use: [
    MinCssPlugin.loader,
    "css-loader",
    "sass-loader"
  ]
}];
