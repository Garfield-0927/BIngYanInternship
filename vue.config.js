module.exports = {
  configureWebpack:{
    resolve: {
      alias: {
        'assets':'@/assets',
        'network':'@/network',
        'components':'@/components',
        'router':'@/router',
        'store':'@/store',
        'views':'@/views',
      }
    }
  }
}