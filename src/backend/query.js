const knex = require('./knexfile')

function getAllProductos(){
  return knex('productos').select('*')
}

module.exports = {getAllProductos}