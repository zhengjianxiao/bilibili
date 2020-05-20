
// 在vue.config.js文件中：
module.exports = {
  // 修改的配置
  // 将baseUrl: '/api',改为baseUrl: '/',
 // baseUrl: '/',3.0 被弃用改为 publicPath
  outputDir: 'dist',
  /* assetsPublicPath: process.env.NODE_ENV === 'production' ? '/vant-demo/' : '/',*/
  // publicPath:'./',
  assetsDir: 'assets',
  //自己改的：
  publicPath:'./',
  // assetsPublicPath:"/",
  devServer: {
      stats: {
          children: false,
      },
  },
  css: {
      loaderOptions: {
          // 给 less-loader 传递选项,开启less的javascript选项
          less: {
              javascriptEnabled: true
          }
      }
  }
};