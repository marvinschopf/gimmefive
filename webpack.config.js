const path = require("path");
const webpack = require("webpack");

const basePath = path.join(__dirname, 'src')

module.exports = {
	entry: "./index.jsx",
	context: basePath,
	output: {
		path: path.resolve(__dirname, "dist"),
		filename: "highfive.min.js",
		library: "Highfive",
		libraryTarget: "umd",
		umdNamedDefine: true,
	},
	module: {
		rules: [
			{
                test: /\.jsx?$/,
                loader: 'babel-loader',
                include: [basePath],
              }
		],
	},
	resolve: {
		extensions: [".js", ".jsx"],
		alias: {
			react: "preact-compat",
			"react-dom": "preact-compat",
		},
	},
};
