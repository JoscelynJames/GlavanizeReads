$(() => {
  $('#success-message').hide()

  $('#add-book-bttn').click((e) => {
    e.preventDefault();
    $('#success-message').show()
  })


  $('.form-floating-label input, .form-floating-label textarea').focusin(function() {
    $(this).parent().addClass('has-value');
  });

  $('.form-floating-label input, .form-floating-label textarea').blur(function() {
    if (!$(this).val().length > 0) {
      $(this).parent().removeClass('has-value');
    }
  });


})
