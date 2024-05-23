const path = require('path');
const CopyWebpackPlugin = require("copy-webpack-plugin");
module.exports = {
	// entry: './components/navigationbar-wx/index.js',
	entry: {
		// index: './components/navigationbar-wx/index.js',
	},
	output: {
		// filename: 'index.js',
		path: path.resolve(__dirname, 'dist'),
		clean: true,
	},
	module: {
		rules: [

		],
	},
	plugins: [
		new CopyWebpackPlugin({
			patterns: [
				{
					from: './components/navigationbar-wx/',
					to: './'
				}
			]
		})
	],
	mode: "production",
};