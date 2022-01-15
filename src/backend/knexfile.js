const knex = require('knex')

const connectedKnex = knex({
  client: 'sqlite3',
  connection:{
    filename:"./mydb.db"
  },
  useNullAsDefault: true,
})

module.exports = connectedKnex;