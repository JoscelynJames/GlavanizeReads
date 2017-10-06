$(() => {
  const dataBaseURL = 'https://fathomless-springs-90574.herokuapp.com';
  const url = window.location.href;
  const id = url.substring(url.indexOf('?') + 4);

  getBookFromDatabase();

  function getBookFromDatabase() {
    return fetch(`${dataBaseURL
    }/book?id=${id}`)
      .then(res => res.json())
      .then(res => {
        handleBarsTemplateforSingleBook(res)
      });
  };

  function handleBarsTemplateforSingleBook(res) {
    let source = $('#book-template').html();
    let template = Handlebars.compile(source);
    let context = { book: res };
    let html = template(context);

    $('#template').append(html);
  };

});
