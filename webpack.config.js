const path = require('path');

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
				test: /\.css$/,
				use: [ 'style-loader', 'css-loader' ]
			}
		]
	},

	devServer: {
		static: './',
		port: 3000,
		open: true
	}
};
