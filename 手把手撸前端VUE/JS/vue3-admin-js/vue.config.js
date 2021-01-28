// vue.config.js
module.exports = {
    publicPath: process.env.NODE_ENV === 'production' ?
        '' : '/',
    // 构建项目生成的目录
    outputDir: 'dist',
    // 关闭语法的自动检测
    lintOnSave: false,
    // 向预处理器 Loader 传递选项
    css: {
        // extract: false,
        loaderOptions: {
          scss: {
            prependData: `@import "./src/styles/main.scss";`
          }
        }
      }
};