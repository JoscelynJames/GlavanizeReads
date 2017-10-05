$(() => {
  // urls are only for devlopment
  const dataBaseURL = 'https://fathomless-springs-90574.herokuapp.com';
  const frontEndURL = 'http://localhost:3004';
  var url = window.location.href;
  var id = url.substring(url.indexOf('?') + 4);

  getAllAuthorsFromDatabase()

  function getAllAuthorsFromDatabase() {
    return fetch(`${dataBaseURL}/authors`)
      .then(res => res.json())
      .then(res => {
        let source = $('#all-authors-template').html();
        let template = Handlebars.compile(source);
        let context = {
          author: res
        };
        let html = template(context);
        $('#template').append(html);
      })
  };
})
