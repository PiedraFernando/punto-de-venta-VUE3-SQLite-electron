const express = require('express')
const router = express.Router()
const query = require('../querys/productosQuery')

//Obtener todos los productos
router.get('/', async (req,res)=>{
  const result = await query.getAllProductos()
  res.status(200).json({result})
})

router.get('/:data', async (req,res)=>{
  const resultBarcode = await query.searchProductByBarcode(req.params.data)
  if(resultBarcode.length){
    result = resultBarcode
  }else{
    const resultCode = await query.searchProductByCode(req.params.data)
    if(resultCode.length){
      result = resultCode
    }else{
      const resultName = await query.searchProductByName(req.params.data)
      result = resultName
    }
  }
  console.log(result)
  res.status(200).json({result})
})

//Registrar nueva pizza
router.post('/', async (req, res)=>{
  const result = await query.setNewProduct(req)
  res.status(200).json({'Producto':"Producto agregado correctamente",'res':result})
})

router.put('/:id', async (req, res)=>{
  const result = await query.setProduct(req.params.id, req.body)
  res.status(200).json({'Producto':"Producto Modificado correctamente",'res':result})
})

router.delete('/:id', async (req, res)=>{
  const result = await query.deleteProduct(req.params.id)
  res.status(200).json({'Producto':"Producto eliminado correctamente",'res':result})
})

//Exportación de las rutas como módulo
module.exports = router