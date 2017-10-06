$(() => {
  const dataBaseURL = 'https://fathomless-springs-90574.herokuapp.com';
  const url = window.location.href;
  const id = url.substring(url.indexOf('?') + 4);

  getAllAuthorsFromDatabase();

  function getAllAuthorsFromDatabase() {
    return fetch(`${dataBaseURL}/authors`)
      .then(res => res.json())
      .then(res => {
        let source = $('#all-authors-template').html();
        let template = Handlebars.compile(source);
        let context = { author: res };
        let html = template(context);

        $('#template').append(html);
      });
  };
  
});
