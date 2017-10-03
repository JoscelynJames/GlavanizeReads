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

router.get('/book', (req, res) => {
  return queries.books.get
    .getOneBook(req)
    .then(book => {
      res.json(book)
    })
})

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

// delete/patch routes will return 1 if successful and 0 if failed

router.delete('/delete-book', (req, res) => {
  return queries.books.delete
    .deleteBook(req)
    .then((bookBeingDeleted) => {
      res.json(bookBeingDeleted)
    })
})

router.patch('/edit-book', (req, res) => {
  return queries.books.edit
    .editBook(req)
    .then((bookBeingEdited) => {
      res.json(bookBeingEdited)
    })
})

module.exports = router;
