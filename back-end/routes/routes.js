const express = require('express');
const router = express.Router();
const queries = require('../queries/query');

// start of get
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

router.get('/authors', (req, res) => {
  return queries.authors.get
    .getAllAuthors()
    .then(authors => {
      res.json(authors)
    })
    .catch((err) => {
      console.log('err in routes.js', err);
    })
});
// end of get

// start of post
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
// end of post
//delete/patch routes will return 1 if successful and 0 if failed
// start of delete
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
