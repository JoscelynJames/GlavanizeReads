$(() => {
  // urls are only for devlopment
  const dataBaseURL = 'http://localhost:3211';
  const frontEndURL = 'http://localhost:3004';
  var url = window.location.href;
  var id = url.substring(url.indexOf('?') + 4);
<<<<<<< HEAD

  getAllAuthorsFromDatabase()
  
=======
getAllAuthorsFromDatabase()
>>>>>>> 28f6ae91efd6cf9bd25f540fdb9391e1d284ef6b
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
