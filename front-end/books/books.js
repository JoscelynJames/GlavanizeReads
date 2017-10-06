$(() => {
  // urls are only for devlopment
  const dataBaseURL = 'https://fathomless-springs-90574.herokuapp.com';
  var url = window.location.href;

  getAllBooksFromDatabase();

  //SetTimeout due to handlebars loading in after jQuery is tyring to apply the click handlers and whatnots
  window.setTimeout(() => {
    console.log('timeout ready');

    //delete book click handler
    $('#delete-btn').click((e) => {
      e.preventDefault();
      deleteBookFromDatabase(e);
    });

    //edit book click handler redirects to add-book.html
    $('#edit-btn').click((e) => {
      e.preventDefault();
      editBookFromDataBase(e)
    });

  }, 1000);

  // start of all the function 
  function getAllBooksFromDatabase() {
    return fetch(`${dataBaseURL}/books`)
      .then(res => res.json())
      .then(res => {
        handleBarsTemplateForAllBooks(res)
      }).catch(err => console.log(err))
  };

  function handleBarsTemplateForAllBooks(res) {
    let source = $('#all-books-template').html();
    let template = Handlebars.compile(source);
    let context = { books: res };
    let html = template(context);

    $('#template').append(html);
  }

  function deleteBookFromDatabase(e) {
    let id = e.target.className;
    if (confirm('are you sure?')) {
      return fetch(`${dataBaseURL}/delete-book?id=${id}`, {method : 'DELETE'})
        .then(res => console.log(res))
        .catch(err => console.log(err, 'deleteBookFromDatabase function'))
      location.reload();
    }
  }

  function editBookFromDataBase(e) {
    let id = e.target.className;
    return window.location.href = `${url}/add-book.html?id=${id}`;
  }
})
