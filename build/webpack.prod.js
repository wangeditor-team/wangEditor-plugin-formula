const path = require('path')
const webpack = require('webpack')
const { merge } = require('webpack-merge')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin
const webpackCommonConf = require('./webpack.common.js')
const { distPath, srcPath } = require('./paths.js')

// 包体积分析
const isAnalyzer = process.env.NODE_ENV === 'production_analyzer'

// webpack plugins
const plugins = [
  new webpack.DefinePlugin({
    ENV: JSON.stringify('production'),
  }),
  new CleanWebpackPlugin(),
]
if (isAnalyzer) {
  plugins.push(new BundleAnalyzerPlugin())
}

module.exports = merge(webpackCommonConf, {
  mode: 'production',
  entry: path.join(srcPath, 'index'),
  output: {
    filename: 'index.js',
    path: distPath,
    library: {
      name: 'WangEditorPluginFormula',
      type: 'umd',
    },
  },
  externals: {
    '@wangeditor/editor': {
      commonjs: '@wangeditor/editor',
      commonjs2: '@wangeditor/editor',
      amd: '@wangeditor/editor',
      root: 'wangEditor',
    },
    katex: 'katex',
  },
  plugins,
  devtool: 'source-map',
})
