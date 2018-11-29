/* eslint-disable max-len */
// 去console插件
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
// gzip压缩插件
const CompressionWebpackPlugin = require('compression-webpack-plugin');
// 拷贝文件插件
const CopyWebpackPlugin = require('copy-webpack-plugin');
const webpack = require('webpack');
const path = require('path');

const cesiumSource = './node_modules/cesium/Source';
const cesiumWorkers = '../Build/Cesium/Workers';
const appInfo = require('./src/appinfo');

module.exports = {
  baseUrl: '',
  // 生产环境下 sourceMap
  productionSourceMap: false,
  // iez3d配置
  configureWebpack: {
    output: {
      sourcePrefix: ' '
    },
    amd: {
      toUrlUndefined: true
    },
    resolve: {
      // extensions: ['', '.js', '.vue'],
      alias: {
        vue$: 'vue/dist/vue.esm.js',
        '@': path.resolve('src'),
        cesium: path.resolve(__dirname, cesiumSource)
        // layer: path.resolve(__dirname, `${path.resolve('src')}/libs/js/layer/layer.js`),
        // 'layer.css': path.resolve(__dirname, `${path.resolve('src')}/libs/js/layer/theme/default/layer.css`),
      }
    },
    plugins: [
      // new UglifyJsPlugin({
      //     uglifyOptions: {
      //         compress: {
      //             warnings: false,
      //             drop_debugger: true,
      //             drop_console: true,
      //         },
      //     },
      //     sourceMap: false,
      //     parallel: true,
      // }),
      // new CompressionWebpackPlugin({
      //     asset: '[path].gz[query]',
      //     algorithm: 'gzip',
      //     test: new RegExp(
      //         '\\.(' +
      //         ['js', 'css'].join('|') +
      //         ')$',
      //     ),
      //     threshold: 10240,
      //     minRatio: 0.8,
      // }),

      new CopyWebpackPlugin([{ from: path.join(cesiumSource, cesiumWorkers), to: 'static/Workers' }]),
      new CopyWebpackPlugin([{ from: path.join(cesiumSource, 'Assets'), to: 'static/Assets' }]),
      new CopyWebpackPlugin([{ from: path.join(cesiumSource, 'Widgets'), to: 'static/Widgets' }]),
      new CopyWebpackPlugin([{ from: path.join(cesiumSource, 'ThirdParty/Workers'), to: 'static/ThirdParty/Workers' }]),
      new webpack.DefinePlugin({
        CESIUM_BASE_URL: JSON.stringify('/static')
      })
    ],
    optimization: {
      splitChunks: {
        cacheGroups: {
          commons: {
            name: 'Cesium',
            test: /[\\/]node_modules[\\/]cesium/,
            chunks: 'all'
          }
        }
      }
    },
    module: {
      // noParse: [/videojs-contrib-hls/],
      rules: [
        // {
        //   test: require.resolve('jquery'),
        //   use: [{
        //     loader: 'expose-loader',
        //     options: 'jQuery'
        //   }, {
        //     loader: 'expose-loader',
        //     options: '$'
        //   }]
        // }
      ],
      // unknownContextCritical: /^.\/.*$/,
      unknownContextCritical: false

    }
  },
  css: {
    // 启用 CSS modules
    modules: false,
    // 是否使用css分离插件
    extract: true,
    // 开启 CSS source maps?
    sourceMap: false,
    // css预设器配置项
    loaderOptions: {}
  },
  pluginOptions: {
    electronBuilder: {
      builderOptions: {
        productName: appInfo.appName
      }
    }
  }
};
