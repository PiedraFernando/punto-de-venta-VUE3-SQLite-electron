const express = require('express')
const router = express.Router()
const query = require('../query')

router.get('/', async (req,res)=>{
  const result = await query.getAllProductos()
  res.status(200).json({result})
})


//Exportación de las rutas como módulo
module.exports = router