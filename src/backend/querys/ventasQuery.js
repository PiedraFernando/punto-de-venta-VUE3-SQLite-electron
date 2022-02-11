const knex = require('../knexfile')

async function setNewVenta(req){
  const data = req.body
  const maxNum = await knex('ventas').max('folio',{as:'max'})
  console.log(maxNum[0].max)
  data.forEach(async function(element){
    return await knex('ventas').insert({
      folio:maxNum[0].max+1,
      idproducto: element.id,
      nombre: element.nombre,
      cantidad: element.cantidad,
      precioventa: element.precioVenta,
      subtotal: element.cantidad * element.precioVenta,
    })
  });
}

module.exports = {
  setNewVenta
}