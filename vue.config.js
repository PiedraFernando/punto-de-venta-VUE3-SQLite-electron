module.exports = {
  pluginOptions:{
    electronBuilder:{
      builderOptions: {
        win: {
          icon: 'public/favicon.ico'
        }
      },
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
      builderOptions: {
        win: {
          icon: 'public/favicon.ico'
        }
      },
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