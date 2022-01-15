const express = require('express')
const app = express()

app.use(express.json())
app.use(express.urlencoded({exptended:false}))

//routes
app.use('/api/productos', require('./routes/producto'))

app.listen(3000,()=>{
  console.log('Servidor express inicializado en el puerto 3000')
})

