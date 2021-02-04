import webpack from "webpack";
import path from "path";

module.exports = {
    entry: './index.js',
    context: path.resolve(__dirname + "src"),
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "highfive.min.js",
        library: 'Highfive',
        libraryTarget: 'umd',
        umdNamedDefine: true,
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                include: resolve(__dirname, 'src'),
                use: [
                    {
                        loader: 'babel-loader',
                        options: {
                            babelrc: true
                        }
                    }
                ]
            }
        ]
    },
    "resolve": {
        extensions: ['.js', '.jsx'],
        "alias": {
          "react": "preact-compat",
          "react-dom": "preact-compat"
        }
      }
}