const express = require('express');
const router = express.Router();
const queries = require('../queries/query');

router.get('/books', (req, res) => {
  return queries.books.get
    .getAllBooks()
    .then(books => {
      res.json(books)
    })
    .catch((err) => {
      console.log('err in routes.js', err);
    })
});

router.post('/add-book', (req, res) => {
  return queries.books.post
    .addBook(req)
    .then((addedBook) => {
      res.json(addedBook)
    })
    .catch((err) => {
      console.log('err in routes.js', err);
    })
});

module.exports = router;
