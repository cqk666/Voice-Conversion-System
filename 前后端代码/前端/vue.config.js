const { defineConfig } = require('@vue/cli-service')

// 引入等比适配插件
const px2rem = require('postcss-px2rem')

// 配置基本大小
const postcss = px2rem({
  // 基准大小 baseSize，需要和rem.js中相同
  // remUnit: 14 代表 1rem = 100px; 所以当你一个14px值时，它会自动转成 (14px/14)rem
  remUnit: 14
})

module.exports = defineConfig({
  lintOnSave: false,  //关闭语法检查
  transpileDependencies: true,
  css: {
    loaderOptions: {
      postcss: {
        postcssOptions: {
          plugins: [
            require('postcss-pxtorem')({ // 把px单位换算成rem单位
              selectorBlackList: ['vant', 'mu'], // 忽略转换正则匹配项
              propList: ['*']
            })
          ]
        }
      }
    },
  },
  devServer: {
    host: 'localhost',
    port: 8099,
    https: false,
    //以上的ip和端口是我们本机的;下面为需要跨域的
    proxy: {//配置跨域
      '/api': {
        target: 'http://120.26.217.161:8080/api',//填写你们真实的后台接口
        ws: true,
        changOrigin: true,//允许跨域
        pathRewrite: {
          '^/api': ''//请求的时候使用这个api就可以
        }
      }
    }
  },
})

