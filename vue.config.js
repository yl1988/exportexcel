
module.exports = {

  // 基本路径
  publicPath: './',
  // 输出文件目录
  outputDir: 'excel-test',
  // 生产环境是否生成 sourceMap 文件
  productionSourceMap: false,
  devServer: {
    open: false,                                 //配置自动启动浏览器
    port: 3000,                                 // 端口号
    https: false,
    hotOnly: false,                             // 设置代理
    proxy:'http://192.168.99.58:3000',
  },

}
