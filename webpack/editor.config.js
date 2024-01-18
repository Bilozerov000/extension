const path = require("path");
const webpack = require("webpack");

/** @typedef {import('webpack').Configuration} WebpackConfig **/
/** @type WebpackConfig */
const config = [
  {
    name: "editor",
    target: "web",
    entry: "./src/editor/index.tsx",
    output: {
      filename: "editor.js",
      path: path.resolve(__dirname, "../dist/"),
    },
    devtool: "source-map",
    resolve: {
      extensions: [".ts", ".js", ".tsx", ".jsx"],
      fallback: {
        assert: require.resolve("assert"),
        path: require.resolve("path-browserify"),
      },
    },
    module: {
      rules: [
        {
          test: /\.(ts|tsx)$/,
          exclude: /node_modules/,
          use: [
            {
              loader: "ts-loader",
            },
          ],
        },
        {
          test: /\.css$/,
          use: ["style-loader", "css-loader", "postcss-loader"],
        },
        {
          test: /\.mjs$/,
          include: /node_modules/,
          type: "javascript/auto",
          resolve: {
            fullySpecified: false,
          },
        },
      ],
    },
    performance: {
      hints: false,
    },
    plugins: [
      new webpack.ProvidePlugin({
        // Make a global `process` variable that points to the `process` package,
        // because the `util` package expects there to be a global variable named `process`.
        // Thanks to https://stackoverflow.com/a/65018686/14239942
        process: "process/browser",
      }),
    ],
    devServer: {
      compress: true,
      port: 9000,
      hot: true,
      allowedHosts: "all",
      headers: {
        "Access-Control-Allow-Origin": "*",
      },
      static: {
        directory: path.join(__dirname, "../dist"),
        watch: true,
      },
    },
  },
];

module.exports = [config];
