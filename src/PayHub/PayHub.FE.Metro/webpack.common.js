const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

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
        test: /\.css$/,
        use: [
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
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      title: 'Production',
    }),
  ],
  externals: {
    lodash: {
      commonjs: 'lodash',
      commonjs2: 'lodash',
      amd: 'lodash',
      root: '_',
    },
    vue: { commonjs: "vue", commonjs2: "vue",amd: 'vue', root: ['Vue'] },
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