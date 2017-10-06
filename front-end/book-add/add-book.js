$(() => {
  // urls are only for devlopment
  const dataBaseURL = 'https://fathomless-springs-90574.herokuapp.com';
  
  var url = window.location.href;
  var id = url.substring(url.indexOf('?') + 4);
  let data;

// hide the success-message
  $('#success-message').hide();

// if the url contains a query for id and if it does you know you are editing a book
  if (url.indexOf('?id=') > -1) {
    getBook(id);
    $('#submit-book-bttn').val('Edit Book')
    $('#submit-book-bttn').attr('id', 'edit-book-bttn')
  };

    function getBook(id) {
      return fetch(`${dataBaseURL}/book?id=${id}`)
        .then(res => res.json())
        .then(res => {
          // extract need data from res &&
          // auto populate the form with the data above
          $('#title').val(res[0].title);
          $('#author').val(res[0].author);
          $('#genre').val(res[0].genre);
          $('#description').val(res[0].description);
          $('#cover-img').val(res[0].cover_img);
        })
    };

    //click handler to update book info
    $('#edit-book-bttn').click((e) => {
      e.preventDefault();
      data = {
        id: id,
        title: $('#title').val(),
        author: $('#author').val(),
        genre: $('#genre').val(),
        description: $('#description').val(),
        cover_img: $('#cover-img').val()
      };
     $.ajax({
        url: `${dataBaseURL}/edit-book?id=${id}`,
        type: 'PATCH',
        data: data
      }).then(() => {
          $('#success-message').show();
        });
    });

// if the query does not contain a query you know you need are adding a book
    $('#submit-book-bttn').click((e) => {
      e.preventDefault();
      data = {
       title: $('#title').val(),
       author: $('#author').val(),
       genre: $('#genre').val(),
       description: $('#description').val(),
       cover_img: $('#cover-img').val()
     };
      $.ajax({
        url: `${dataBaseURL}/add-book`,
        type: 'POST',
        data: data
      }).then(() => { 
        $('#success-message').show();
       })
    });

});
