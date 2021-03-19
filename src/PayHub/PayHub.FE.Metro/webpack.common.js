const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { VueLoaderPlugin } = require('vue-loader');
const webpack = require('webpack');

module.exports = {
  entry: './src/index.ts',
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.vue$/,
        loader: 'vue-loader'
      },
      {
        test: /\.css$/,
        use: [
          'vue-style-loader',
          'style-loader',
          'css-loader'
        ]
      }
      // {
      //   test: /\.svg$/,
      //   type: 'asset/inline',
      //   generator: {
      //     dataUrl: content => {
      //       content = content.toString();
      //       return svgToMiniDataURI(content);
      //     }
      //   }
      // }
    ],
  },
  resolve: {
    extensions: [ '.tsx', '.ts', '.js' ],
    // hack for errors when import pw-core
    fallback: {
      buffer: require.resolve("buffer/"),
      crypto: require.resolve("crypto-browserify"),
      http: require.resolve("stream-http"),
      https: require.resolve("https-browserify"),
      os: require.resolve("os-browserify/browser"),
      stream: require.resolve("stream-browserify"),
      url: require.resolve("url/")
    }
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      title: 'Production',
    }),
    new VueLoaderPlugin(),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV),
      'process.env.MY_ENV': JSON.stringify(process.env.MY_ENV)
    })
  ],
  externals: {
    lodash: {
      commonjs: 'lodash',
      commonjs2: 'lodash',
      amd: 'lodash',
      root: '_',
    },
    vue: { commonjs: "vue", commonjs2: "vue",amd: 'vue', root: ['Vue'] },
    //"vue": "_.createApp",
    // "react-dom": { commonjs: "react-dom", commonjs2: "react-dom", amd: 'react-dom', root: ['ReactDom'] },
    // "react-redux": { commonjs: "react-redux", commonjs2: "react-redux", amd:"react-redux"},
    // redux: { commonjs: "redux", commonjs2: "redux", amd: 'redux'},
    "prop-types": { commonjs: "prop-types", commonjs2: "prop-types",amd: 'prop-types' }
  },
  output: {
    filename: 'payhub.js',
    path: path.resolve(__dirname, 'dist'),
    library: 'PayHub',
    libraryExport: 'default',
    libraryTarget: 'umd',
  },
};