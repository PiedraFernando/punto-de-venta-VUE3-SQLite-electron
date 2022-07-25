const knex = require('../knexfile')

function getAllProductos(){
  return knex('productos').select('*')
}

function getFaltantes(){
  return knex('productos').where('cantidad','<=', knex.ref("cantidadAviso"))
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

function search(data){
  return knex('productos')
    .where('nombre','like','%'+data+'%')
    .orWhere('codigo','like','%'+data+'%')
    .orWhere('codigoBarras',data)
}

module.exports = {
  getAllProductos,
  getFaltantes,
  setNewProduct,
  setProduct,
  deleteProduct,
  search
}