exports.up = function(knex, Promise) {
  return knex.schema.createTable('book', (table) => {
    table.increments('id')
    table.varchar('title')
    table.text('genre')
    table.text('description')
    table.text('cover_img')
    table.integer('author')
    .references('author.id')
    .onDelete('CASCADE')
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('book')
};
