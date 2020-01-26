const API_LINK = "https://slack.com/api/";

document.addEventListener('click', function() {
  let message = document.getElementById('message').value;

  let data = {
    channel: "CSU7L8J0Z",
    text: message
  }

  $.ajax({
    url: API_LINK + 'chat.postMessage',
    type: "POST",
    data: JSON.stringify(data),
    contentType: "application/json; charset=utf-8",
    dataType: "json",
    success: function(){
      alert('Message envoyé !')
    }
  })
});

