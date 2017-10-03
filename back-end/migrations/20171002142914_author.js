exports.up = function(knex, Promise) {
  return knex.schema.createTable('author', (table) => {
    table.increments('id')
    table.varchar('last_name')
    table.varchar('first_name')
    table.text('bio')
    table.text('portrait')
    table.integer('author')
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('author')
};