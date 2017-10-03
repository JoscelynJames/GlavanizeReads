const knex = require('./knex')

module.exports = {
  books: {
    post: {
      addBook: function(req) {
        console.log(req.body);
        return knex('book')
          .insert([{
            title: req.body.title,
            author: req.body.author,
            genre: req.body.genre,
            description: req.body.description,
            cover_img: req.body.cover_img
          }])
      }
    },
    get: {
      getAllBooks: function() {
        return knex
          .select()
          .from('book')
      },
      getOneBook: function(req) {
        return knex('book')
          .select()
          .where('id', '=', req.query.id)
      }
    },
    delete: {
      deleteBook: function(req) {
        return knex
          .select()
          .from('book')
          .where('id', '=', req.query.id)
          .del()
      }
    },
    edit: {
      editBook: function(req) {
        return knex('book')
          .select('*')
          .where('id', '=', req.query.id)
          .update({
            id: req.body.id,
            title: req.body.title,
            author: req.body.author,
            genre: req.body.genre,
            description: req.body.description,
            cover_img: req.body.cover_img
          })
          .catch(err => console.log(err))
      }
    }
  },
  authors: {
    post: "",
    get: ""
  }
}
