module.exports = {
  lintOnSave: false,
  css: {
    loaderOptions: {
      scss: {
        additionalData: `
          @import "@/styles/global";
        `
      }
    }
  },
  devServer: {
    open: true
  }
}
