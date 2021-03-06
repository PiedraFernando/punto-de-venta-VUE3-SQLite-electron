const express = require('express')
const router = express.Router()
const query = require('../querys/ventasQuery')

router.post('/', async (req, res)=>{
  const result = await query.setNewVenta(req)
  res.status(200).json({'venta':"Venta realizada correctamente",'res':result})
})

router.post('/inRange', async (req, res)=>{
  const result = await query.getVentasInRange(req)
  res.status(200).json({'venta':"Datos en un rango de fechas",'res':result})
})

router.get('/', async (req, res)=>{
  const result = await query.getAllVentas(req)
  res.status(200).json({result})
})

module.exports = router