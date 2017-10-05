$(() => {
  // urls are only for devlopment
  const dataBaseURL = 'http://localhost:3211';
  const http://groovy-cloud.surge.sh = 'hhttp://groovy-cloud.surge.sh';
  var url = window.location.href;
  var id = url.substring(url.indexOf('?') + 4);
  let data;

  $('#success-message').hide()

  $('#submit-book-bttn').click((e) => {
    e.preventDefault();
    data = {
     first_name: $('#first-name').val(),
     last_name: $('#last-name').val(),
     bio: $('#bio').val(),
     portrait: $('#portrait').val()
   };
   console.log(data);
    $.ajax({
      url: `${dataBaseURL}/add-author`,
      type: 'POST',
      data: data
    }).catch((err) => console.log(err))
    $('#success-message').show()
  })

})
