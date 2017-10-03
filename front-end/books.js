$(() => {
  // urls are only for devlopment
  const dataBaseURL = 'http://localhost:3211';
  const frontEndURL = 'http://localhost:3004';
  getAllBooksFromDatabase();

  //SetTimeout due to handlebars loading in after jQuery is tyring to apply the click handlers and whatnots
  window.setTimeout(() => {
    console.log('timeout ready');

    //delete book click handler
    $('#delete-btn').click((e) => {
      e.preventDefault();
      id = e.target.className;
      deleteBookFromDatabase(id);
    });

    //edit book click handler redirects to add-book.html
    $('#edit-btn').click((e) => {
      e.preventDefault();
      //class name holds the id from the database
      id = e.target.className;
      window.location.href = `${frontEndURL}/add-book.html?id=${id}`;
    });

  }, 1000)

  function getAllBooksFromDatabase() {
    return fetch(`${dataBaseURL}/books`)
      .then(res => res.json())
      .then(res => {
        console.log(res);
        let source = $('#all-books-template').html();
        let template = Handlebars.compile(source);
        let context = {
          books: res
        };
        let html = template(context);
        $('#template').append(html);
      }).catch(err => console.log(err))
  };

  function deleteBookFromDatabase(id) {
    if (confirm('are you sure?')) {
      $.ajax({
        url: `${dataBaseURL}/delete-book?id=${id}`,
        type: 'DELETE'
      });
      location.reload();
    }

    // TODO look into later - couldnt get to work with fetch
    // return fetch(`${dataBasedataBaseURL}/delete-book?id=${id}`)
    //   .then(res => console.log(res))
    //   .catch(err => console.log(err, 'deleteBookFromDatabase function'))
  }
})
