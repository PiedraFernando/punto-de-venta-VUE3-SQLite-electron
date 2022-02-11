const express = require('express')
const router = express.Router()
const query = require('../querys/ventasQuery')

router.post('/', async (req, res)=>{
  const result = await query.setNewVenta(req)
  res.status(200).json({'venta':"Venta realizada correctamente",'res':result})
})

module.exports = router