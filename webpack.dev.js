const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
	mode: 'development',
	entry: {
		'app': './test/app.js',
		'vendors': [
			'./node_modules/jquery/dist/jquery.js',
			'./node_modules/angular/angular.js',
			'./node_modules/underscore/underscore.js',
			'./node_modules/angular-vs-repeat/src/angular-vs-repeat.js'
		],
		'angular-virtual-select': './dist/angular-virtual-select.js'
	},
	output: {
		filename: '[name].js',
		path: path.resolve(__dirname, 'test/dist')
	},
	plugins: [
		new CleanWebpackPlugin(['./test/dist']),
		new HtmlWebpackPlugin({
			title: 'Angular Virtual Select Test Page',
			filename: 'index.html',
			template: './test/index.html'
		})
	],
	devtool: 'inline-source-map',
	devServer: {
		contentBase: './test/dist'
	}
};