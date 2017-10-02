const knex = require('./knex')

module.exports = {
  books: {
    getAllBooks: function(){
      return knex.select().from('book')
    }
  },
  book: {

  },
  authors: {

  },
  author: {

  }
}
