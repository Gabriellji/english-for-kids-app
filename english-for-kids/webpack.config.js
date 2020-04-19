const webpack = require('webpack');
const path = require('path');


module.exports = (env, options) => {
	const isProdaction = options.mode === 'production';

	const config = {
		mode: isProdaction ? 'production' : 'development',
		devtool: isProdaction ? 'none' : 'source-map',
		watch: !isProdaction,
		entry: ['./src/index.js'],
		output: {
			path: path.join(__dirname, '/dist'),
			filename: 'script.js',
		},

		module: {
			rules: [
				{
					test: /\.js$/,
					exclude: /node_modules/,
					use: {
						loader: 'babel-loader',
						options: {
							presets: ['@babel/preset-env'],
						},
					},
				}, {
					test: /\.(png|svg|jpe?g|gif)$/,
					use: [
						{
							loader: 'file-loader',
						},
					],
				},
			],
		},

		devServer: {
			contentBase: path.join(__dirname, 'dist'),
		},

	};


	return config;
};
