$(() => {
  // urls are only for devlopment
  const dataBaseURL = 'http://localhost:3211';
  const frontEndURL = 'http://localhost:3004';
  var url = window.location.href;
  var id = url.substring(url.indexOf('?') + 4);
  getBookFromDatabase();

  function getBookFromDatabase() {
    return fetch(`${dataBaseURL}/book?id=${id}`)
      .then(res => res.json())
      .then(res => {
        let source = $('#book-template').html();
        let template = Handlebars.compile(source);
        let context = {
          book: res
        };
        let html = template(context);
        $('#template').append(html);
      })
  };
})
