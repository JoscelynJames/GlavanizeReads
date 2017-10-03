$(() => {
  const dataBaseURL = 'http://localhost:3211';
  const frontEndURL = 'http://localhost:3004';
  //get href and the query attached
  var url = window.location.href;
  var id = url.substring(url.indexOf('?') + 4);
console.log(id);
  //hide and show of the success-message
  $('#success-message').hide()
    $('#submit-book-bttn').click((e) => {
      e.preventDefault();
      $('#success-message').show()
    })

    // //change button to say edit
    // $('#submit-book-bttn').val('Edit Book')
    // $('#submit-book-bttn').attr('id', 'edit-book-btn')

    function getBook(id) {
      return fetch(`${dataBaseURL}/book?id=${id}`)
        .then(res => res.json())
        .then(res => {
          // extract need data from res
          let title = res[0].title;
          let author = res[0].author;
          let genre = res[0].genre;
          let description = res[0].description;
          let cover_img = res[0].cover_img;

          // auto populate the form with the data above
          $('#title').val(title);
          $('#author').val(author);
          $('#genre').val(genre);
          $('#description').val(description);
          $('#cover-img').val(cover_img);
        })
    };

    getBook(id);

    //click handler to update book info
    $('#submit-book-bttn').click((e) => {
      e.preventDefault();

      let data = {
        id: id,
        title: $('#title').val(),
        author: $('#author').val(),
        genre: $('#genre').val(),
        description: $('#description').val(),
        cover_img: $('#cover-img').val()
      };
      JSON.stringify(data)
      console.log(data);

      $.ajax({
        url: `${dataBaseURL}/edit-book?id=${id}`,
        type: 'PATCH',
        data: data
      }).catch((err) => console.log(err))
    })

})
