const knex = require('./knex')

module.exports = {
  books: {
    post: {
      addBook: function(req) {
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
      return knex.select().from('book')
    }
  }
},
  authors: {
    post: "",
    get: ""
  }
}
