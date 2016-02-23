
var webpack = require('webpack');
var merge = require('webpack-merge');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var NpmInstallPlugin = require('npm-install-webpack-plugin');
var autoprefixer = require('autoprefixer');
var ExtractTextPlugin = require("extract-text-webpack-plugin");

const TARGET = process.env.npm_lifecycle_event;
console.log("target event is " + TARGET);

var common = {
  cache: true,
  debug: true,
  devtool: "source-map",
  entry: [
    './src/scripts/main.js'
  ],
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  output: {
    filename: 'scripts/[name].bundle.js',
    sourceMapFilename: '[file].map'
  },
  module: {
    loaders: [
    {
      test: /\.js[x]?$/,
      loaders: ['babel'],
      exclude: /(node_modules|bower_components)/
    }, 
    {
      test: /\.html$/,
      loader: "file?name=[name].[ext]",
    },
    { 
      test: /\.scss$/,
      loader: ExtractTextPlugin.extract("style", "css?sourceMap!sass?sourceMap")
    },
    {
      test: /\.woff$/,
      loader: "url-loader?limit=10000&mimetype=application/font-woff&name=[path][name].[ext]"
    }, 
    {
      test: /\.woff2$/,
      loader: "url-loader?limit=10000&mimetype=application/font-woff2&name=[path][name].[ext]"
    }, 
    {
      test: /\.(eot|ttf|svg|gif|png)$/,
      loader: "file-loader"
    }]
  },
  plugins: [
    new ExtractTextPlugin("css/[name].css", {allChunks: true})
  ],
  postcss: function() {
    return [autoprefixer({
      browsers: ['last 3 versions']
    })];
  }
};

if (TARGET === 'dev' || !TARGET) {
  module.exports = merge(common, {
    devServer: {
      historyApiFallback: true
    },
    output: {
      publicPath: '/assets'
    },
    plugins: [
      new NpmInstallPlugin({
        save: true // --save
      })
    ]
  });
}

if (TARGET === 'build') {
  module.exports = merge(common, {
    output: {
      path: './dist'
    },
    plugins: [
      new HtmlWebpackPlugin({
        title: 'Webpack-react',
        template: 'index-template.html',
        inject: 'body'
      })
    ]
  });
}