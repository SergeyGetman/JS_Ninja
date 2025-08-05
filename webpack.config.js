const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
	entry: {
		formreg: './src/logik/autorized/script.js',
		lessons: './src/logik/lessons/lessons.js'
	},
	output: {
		filename: '[name].bundle.js',
		path: path.resolve(__dirname, 'dist'),
		clean: true
	},
	mode: 'development',
	devtool: 'inline-source-map',
	module: {
		rules: [
			{
				test: /\.css$/i,
				use: [ 'style-loader', 'css-loader' ]
			},
			{
				test: /\.(png|jpg|jpeg|gif|svg)$/i,
				type: 'asset/resource'
			}
		]
	},
	plugins: [
		new HtmlWebpackPlugin({
			filename: 'formreg.html',
			template: './src/logik/autorized/formreg.html',
			chunks: [ 'formreg' ]
		}),
		new HtmlWebpackPlugin({
			filename: 'lessons.html',
			template: './src/logik/lessons/lessons.html',
			chunks: [ 'lessons' ]
		})
	],
	devServer: {
		static: './dist',
		port: 3000,
		open: {
			target: [ 'formreg.html' ]
		}
	}
};
