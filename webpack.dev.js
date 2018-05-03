const path = require('path');
const webpack = require('webpack');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
	mode: 'development',
	entry: {
		'vendors': [
			'./node_modules/jquery/dist/jquery.js',
			'./node_modules/angular/angular.js',
			'./node_modules/underscore/underscore.js',
			'./node_modules/angular-vs-repeat/src/angular-vs-repeat.js'
		],
		'angular-virtual-select': './dist/angular-virtual-select.js',
		'app': './test/app.js'
	},
	output: {
		filename: '[name].js',
		path: path.resolve(__dirname, 'test/dist')
	},
	module: {
		rules: [
			{
				test: /\.css$/,
				use: ExtractTextPlugin.extract({
					fallback: 'style-loader',
					use: 'css-loader'
				})
			}
		]
	},
	plugins: [
		new webpack.ProvidePlugin({
			$: 'jquery',
			jQuery: 'jquery',
			'window.jQuery': 'jquery',
			_: 'underscore',
			'window._': 'underscore'
		}),
		new CleanWebpackPlugin(['./test/dist']),
		new HtmlWebpackPlugin({
			title: 'Angular Virtual Select Test Page',
			filename: 'index.html',
			template: './test/index.html'
		}),
		new ExtractTextPlugin('ui-select.css')
	],
	devtool: 'inline-source-map',
	devServer: {
		contentBase: './test/dist'
	}
};