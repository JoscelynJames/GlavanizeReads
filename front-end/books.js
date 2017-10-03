$(() => {
  const url = 'http://localhost:3211/';

  function getAllBooksFromDatabase() {
    return fetch(url + 'books')
      .then(res => res.json())
      .then(res => {
        let source = $('#all-books-template').html();
        let template = Handlebars.compile(source);
        let context = {
          books: res
        };
        let html = template(context);
        $('#template').append(html);
      })
  };
  getAllBooksFromDatabase();

})