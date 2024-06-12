const path = require('path');
const rules = require('./webpack-config/rules');
const plugins = require('./webpack-config/plugins');
const devServer = require('./webpack-config/devServer');

const outputLib = {
	path: path.resolve(__dirname, 'dist'),
	filename: 'bundle.js',
	globalObject: 'this',
	library: {
		name: 'testLib',
		type: 'umd',
	},
},

outputLocal = {
	publicPath: '/', // to make sure the assets are served from the root as we are using react-router
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].js',
}

const output = process.env.NODE_ENV === 'local' ? outputLocal : outputLib;

const { NODE_ENV } = process.env;
const config ={
	entry: process.env.NODE_ENV === 'local'? './src/main.tsx':'./src/index.tsx',
	output: output,
	resolve: {
		extensions: [".ts",".tsx",".js",".jsx"],
		alias: {
			"@": path.join(path.resolve(__dirname, "./src")),
		},
	},
	  
	module: { rules },
	mode: NODE_ENV === 'production' ? 'production' : 'development',
}

if (NODE_ENV === 'local') {
	config.plugins = plugins
	config.devServer = devServer;
}


module.exports = config;