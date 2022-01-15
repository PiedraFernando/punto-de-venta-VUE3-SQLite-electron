module.exports = {
  devServer:{
    proxy:'http://localhost:3000'
  },
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
}