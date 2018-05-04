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
			'./node_modules/angular/angular.js',
			'./node_modules/lodash/lodash.js',
			'./node_modules/angular-vs-repeat/dist/angular-vs-repeat.js'
		],
		'angular-virtual-select': './dist/angular-virtual-select.js',
		'app': './test/app.js',
		'styles': [
			'./node_modules/bootstrap/dist/css/bootstrap.css',
			'./node_modules/ui-select/dist/select.css',
			'./dist/angular-virtual-select.css',
			'./test/main.css',
		]
	},
	output: {
		filename: 'test/dist/[name].js',
		path: path.resolve(__dirname)
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
			_: 'lodash',
			'window._': 'lodash'
		}),
		new CleanWebpackPlugin(['./test/dist']),
		new HtmlWebpackPlugin({
			title: 'Angular Virtual Select Test Page',
			filename: 'index.html',
			template: './test/index.html',
			excludeAssets: [/styles.js/]
		}),
		new HtmlWebpackExcludeAssetsPlugin(),
		new ExtractTextPlugin('test/dist/select.css')
	],
	devtool: 'inline-source-map',
	devServer: {
		contentBase: './test/dist'
	}
};