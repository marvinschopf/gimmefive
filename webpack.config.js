const path = require("path");
const webpack = require("webpack");
const TerserPlugin = require("terser-webpack-plugin");
const fs = require("fs");

const basePath = path.join(__dirname, "src");

module.exports = {
	entry: "./index.jsx",
	context: basePath,
	optimization: {
		minimize: true,
		minimizer: [
			new TerserPlugin({
				extractComments: {
					condition: /^\**!|@preserve|@license|@cc_on/i,
					banner: (licenseFile) => {
						const licenseHeader = fs
							.readFileSync(path.resolve(__dirname, "LICENSE_HEADER"))
							.toString("utf-8")
							.split("\n");
						let arrayBanner = [
							...licenseHeader,
							"",
							`Licence information for included packages can be found in ${licenseFile}`,
						];
						arrayBanner.forEach((element, key) => {
							arrayBanner[key] = ` * ${element}`;
						});
						let finalString = arrayBanner.join("\n");
						finalString = `\n${finalString}\n`;
						return finalString;
					},
				},
			}),
		],
	},
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
				loader: "babel-loader",
				include: [basePath],
			},
		],
	},
	resolve: {
		extensions: [".js", ".jsx"],
		alias: {
			react: "preact/compat",
			"react-dom": "preact/compat",
		},
	},
};
