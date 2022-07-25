const express = require('express')
const app = express()
const cors = require('cors')

app.use(express.json())
app.use(express.urlencoded({exptended:false}))
app.use(cors())

//routes
app.use('/api/productos', require('./routes/producto'))
app.use('/api/venta', require('./routes/venta'))

app.listen(5000,()=>{
  console.log('Servidor express inicializado en el puerto 5000')
})
