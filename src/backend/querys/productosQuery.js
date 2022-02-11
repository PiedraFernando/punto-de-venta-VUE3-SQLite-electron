const knex = require('../knexfile')

function getAllProductos(){
  return knex('productos').select('*')
}

function setNewProduct(req){
  return knex('productos').insert(req.body)
}

function setProduct(id,data){
  return knex('productos').where('id',id).update(data)
}

function deleteProduct(id){
  return knex('productos').where('id',id).del()
}

function searchProductByBarcode(data){
  return knex('productos').where('codigoBarras',data)
}

function searchProductByCode(data){
  return knex('productos').where('codigo','like','%'+data+'%')
}

function searchProductByName(data){
  return knex('productos').where('nombre','like','%'+data+'%')
}

module.exports = {
  getAllProductos, 
  setNewProduct, 
  setProduct, 
  deleteProduct, 
  searchProductByBarcode, 
  searchProductByCode, 
  searchProductByName
}