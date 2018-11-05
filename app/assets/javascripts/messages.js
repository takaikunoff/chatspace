$(function(){
  function buildHTML(message){
    var image = (message.image) ? `<img src= ${message.image}>` : ``
    // if((message.image) != null){
    //   var image = `<img src= ${message.image}>`
    // }
    // else{
    //   var image = ``
    // }

    var html = ` <div class= "chat__content-message">
                  <p class ="chat__content-message-name">
                    ${message.user_name}
                    <span class= "chat__content-message-time">${message.created_at}</span>
                  </p>
                  <p class= "chat__content-message-body">
                    ${message.content}
                  </p>
                  <div>
                    ${image}
                  </div>
                </div>`

    return html;
  }
  $('#new__message').on('submit', function(e){
    e.preventDefault();
    var formData = new FormData(this);
    var url = $(this).attr('action');
    $.ajax({
      url: url,
      type: "POST",
      data: formData,
      dataType: 'json',
      processData: false,
      contentType: false
    })
    .done(function(data){
      var html = buildHTML(data);
      $('.chat__content-message-list').append(html)
      $('.chat__content-message-list').animate({scrollTop: $('.chat__content-message-list')[0].scrollHeight}, 'slow','swing');
    })
    .fail(function(){
      alert('メッセージを送信できませんでした')
    })
    .always(function(){
      $(".form__submit").removeAttr("disabled");
      $('.form__message').val('')
    })
  })
});
