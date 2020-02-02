const merge = require('webpack-merge');
const common = require('./webpack.base.config.js');
const webpack = require('webpack');
const env = require('../config/dev.conf.js')
module.exports = merge(common, {
  devtool: 'inline-source-map', //  sourceMap
  devServer: {
    noInfo: true,// 不在cmd/编译器的控制台打印打包的信息，有警告、错误还是会爆出来
    compress: true, // 启用gzip 压缩：
    host: "0.0.0.0",// 默认localhost
    port: 9000, // 端口
    publicPath: "/",
    hot: true,// 启用热替换
    inline: true,
    proxy: { // 代理 基于http-proxy-middleware
      "/api": {
        target: "http://192.168.152.55:6666",
        pathRewrite: { "^/api": "" }
      }
    },
    // https: true,// 启用https服务器 默认http （会被浏览器拦截，可以在浏览器开启）
    open: true,//自动打开浏览器
    // openPage: 'http://localhost:9000', // 浏览器默认打开的页面
    useLocalIp: true, // 使用本地Ip打开页面
    overlay: true,// 编译发生错误时在浏览器窗口提示
    after () { // 提供在服务器内部所有其他中间件之后执行自定义中间件的能力
      console.log('\n 你的服务已启动： http://localhost:9000 \n Ctrl+C 结束')
      console.log(this)  
    }
  },
  plugins: [
    new webpack.DefinePlugin({ // 定义环境和变量
      'process.env': env
    })
  ]
});