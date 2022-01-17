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

module.exports = {getAllProductos, setNewProduct, setProduct, deleteProduct}