const path = require('path');
const webpack = require('webpack');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackExcludeAssetsPlugin = require('html-webpack-exclude-assets-plugin');

module.exports = {
	mode: 'development',
	entry: {
		'vendors': [
			'./node_modules/jquery/dist/jquery.js',
			'./node_modules/angular/angular.js',
			'./node_modules/underscore/underscore.js',
			'./node_modules/angular-vs-repeat/dist/angular-vs-repeat.js'
		],
		'angular-virtual-select': './dist/angular-virtual-select.js',
		'app': './test/app.js',
		'styles': [
			'./test/main.css',
			'./node_modules/bootstrap/dist/css/bootstrap.css',
			'./dist/angular-virtual-select.css'
		]
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
			template: './test/index.html',
			excludeAssets: [/styles.js/]
		}),
		new HtmlWebpackExcludeAssetsPlugin(),
		new ExtractTextPlugin('select.css')
	],
	devtool: 'inline-source-map',
	devServer: {
		contentBase: './test/dist'
	}
};