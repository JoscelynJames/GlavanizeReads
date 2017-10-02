const express = require('express');
const router = express.Router();
const query = require('../queries/query');

router.get('/books', (req, res) => {
  query
  .books
  .getAllBooks()
  .then(books => {
    res.json(books)
  })
});

module.exports = router;
