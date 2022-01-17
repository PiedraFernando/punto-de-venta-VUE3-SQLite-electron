module.exports = {
  pluginOptions:{
    electronBuilder:{
      nodeIntegration:true,
      builderOptions:{
        extraFiles:[
          'mydb.db'
        ]
      }
    }
  },
  pluginOptions: {
    electronBuilder: {
      nodeIntegration:true,
      builderOptions:{
        extraFiles:[
          'mydb.db'
        ]
      },
      chainWebpackRendererProcess(config) {
        config.plugins.delete('workbox')
        config.plugins.delete('pwa')
      }
    }
  }
}