const path = require('path');
module.exports = {
	// entry: './components/navigationbar-wx/index.js',
	entry: {
		index: './components/navigationbar-wx/index.js',
		config: './components/navigationbar-wx/config.js',
	},
	output: {
		// filename: 'index.js',
		path: path.resolve(__dirname, '../dist'),
		// clean: true,
	},
	module: {
		rules: [

		],
	},
	plugins: [
	],
	mode: "production",
};