const path = require('path');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const CssoWebpackPlugin = require('csso-webpack-plugin').default;

module.exports = {
	mode: 'none',
	entry: {
		'angular-virtual-select': './src/angular-virtual-select.js',
		'angular-virtual-select.min': './src/angular-virtual-select.js'
	},
	output: {
		filename: '[name].js',
		path: path.resolve(__dirname, 'dist')
	},
	module: {
		rules: [
			{
				test: /\.less$/,
				use: ExtractTextPlugin.extract({
					fallback: 'style-loader',
					use: ['css-loader', 'less-loader']
				})
			}
		]
	},
	plugins: [
		// new CleanWebpackPlugin(['dist']),
		new UglifyJSPlugin({
			test: /\.min\.js$/,
			uglifyOptions: {
				output: {
					comments: false
				}
			}
		}),
		new ExtractTextPlugin('angular-virtual-select.css'),
		new CssoWebpackPlugin({ pluginOutputPostfix: 'min' })
	]
};