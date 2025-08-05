const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
	entry: './src/logik/autorized/script.js',
	output: {
		filename: 'bundle.js',
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
			template: './src/logik/autorized/formreg.html'
		})
	],
	devServer: {
		static: './dist',
		port: 3000,
		open: true
	}
};
