const express = require('express')
const router = express.Router()
const query = require('../querys/productosQuery')

//Obtener todos los productos
router.get('/', async (req,res)=>{
  try {
    const result = await query.getAllProductos()
    res.status(200).json({result})
  } catch (error) {
    res.status(404).json(error)
  }
})

//obtiene solo los productos con menor existencia que las otras
router.get('/faltantes', async (req,res)=>{
  try {
    const result = await query.getFaltantes()
    res.status(200).json({result})
  } catch (error) {
    res.status(404).json(error)
  }
})

router.get('/:data', async (req,res)=>{
  try {
    const result = await query.search(req.params.data)
    res.status(200).json({result})
  } catch (error) {
    res.status(404).json(error)
  }
})

//Registrar nuevo producto
router.post('/', async (req, res)=>{
  try {
    const result = await query.setNewProduct(req)
    res.status(200).json({'Producto':"Producto agregado correctamente",'res':result})
  } catch (error) {
    res.status(404).json(error)
  }
})

router.put('/:id', async (req, res)=>{
  try {
    const result = await query.setProduct(req.params.id, req.body)
    res.status(200).json({'Producto':"Producto Modificado correctamente",'res':result})
  } catch (error) {
    res.status(404).json(error)
  }
})

router.delete('/:id', async (req, res)=>{
  try {
    const result = await query.deleteProduct(req.params.id)
    res.status(200).json({'Producto':"Producto eliminado correctamente",'res':result})
  } catch (error) {
    res.status(404).json(error)
  }
})

//Exportación de las rutas como módulo
module.exports = router