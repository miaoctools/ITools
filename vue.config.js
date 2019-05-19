module.exports = {
  // 基本路径
  publicPath: process.env.NODE_ENV === 'production' ? './' : '/',
  // 输出文件目录
  outputDir: 'dist',
  assetsDir: 'assets', // 静态资源目录 (js, css, img, fonts)
  // eslint-loader 是否在保存的时候检查
  lintOnSave: true, // 开启eslint
  // 运行时版本是否需要编译
  runtimeCompiler: true,
  configureWebpack: config => {
    require('vux-loader').merge(config, {
      options: {},
      plugins: ['vux-ui'],
      devtool: 'inline-source-map',
      //combined asset size exceeds the recommended limit (250 kB)
      performance: {
        hints: false
      }
    })
  },
  // configureWebpack: () => {},
  // configureWebpack: {
  // options: {},
  //   plugins: ['vux-ui'],
  //   devtool: 'source-map'
  // },
  // 生产环境是否生成 sourceMap 文件
  productionSourceMap: true, // 生产环境下css 分离文件
  // css相关配置
  css: {
    // 是否使用css分离插件 ExtractTextPlugin
    extract: true,
    // 开启 CSS source maps?
    sourceMap: false,
    // css预设器配置项 一次配置，全局使用，这个scss 因为每个文件都要引入
    loaderOptions: {
      // sass: {
      //   data: `@import "./src/assets/hotcss/px2rem.scss";`
      // }
    },
    // 启用 CSS modules for all css / pre-processor files.
    modules: false
  },
  parallel: require('os').cpus().length > 1,
  // webpack-dev-server 相关配置
  devServer: {
    open: process.platform === 'darwin',
    host: 'localhost',
    port: 8081,
    https: false,
    hotOnly: false,
    proxy: null // 设置代理
  },
  // 第三方插件配置
  pluginOptions: {}
}
