const { resolve } = require('path');


module.exports = {
	output: {
		filename: 'app.js',
		path: resolve(__dirname, '../dist'),
	},
	context: resolve(__dirname, '../app'),
	module: {
		rules: [
			{
				test: /\.js$/,
				use: [
					'babel-loader',
				],
				exclude: /node_modules/
			},
			{
				test: /\.css$/,
				use: [
					'style-loader',
					'css-loader?modules',
					// 'postcss-loader',
				],
			},
		],
	}
}
