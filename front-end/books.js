$(() => {
  //SetTimeout due to handlebars loading in after jQuery is tyring to apply the click handler
  window.setTimeout(() => {
    console.log('timeout ready');
    $('#delete-bttn').click((e) => {
      e.preventDefault();
      id = e.target.className;
      deleteBookFromDatabase(id);

    });
  }, 1000)

  const url = 'http://localhost:3211';

  getAllBooksFromDatabase();

  function deleteBookFromDatabase(id) {
    if (confirm('are you sure?')) {
      $.ajax({
        url: `${url}/delete-book?id=${id}`,
        type: 'DELETE'
      });
      location.reload();
    } else {
      console.log('not delted');
    }

    // return fetch(`${url}/delete-book?id=${id}`)
    //   .then(res => console.log(res))
    //   .catch(err => console.log(err, 'deleteBookFromDatabase function'))
  }

  function getAllBooksFromDatabase() {
    return fetch(`${url}/books`)
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


})
