const path = require('path')
const HtmlPlugin = require('html-webpack-plugin')
const MiniCss = require('mini-css-extract-plugin')

module.exports = {
	entry: './client',
	output: {
		filename: 'bundle.js',
		path: path.resolve(__dirname, 'dist')
	},
	resolve: {
		extensions: ['.js','.jsx','.json']
	},
	module: {
		rules: [{
			test: /\.jsx?$/,
			exclude: /node_modules/,
			loader: 'babel-loader',
			options: {
				presets: ['env', 'stage-2', 'react']
			}
		},
		{
			test: /\.(scss|css)$/,
			use: [
				MiniCss.loader,
				'css-loader',
				'sass-loader'
			]
		}
		]
	},
	plugins: [
		new HtmlPlugin(
			{title:'myreactapp', template:'./client/index.html'}
		),
		new MiniCss()
	]
}