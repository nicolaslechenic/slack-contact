const API_LINK = "https://slack.com/api/";

document.getElementById('submit').addEventListener('click', () => {
  let email = document.getElementById('email').value;
  let message = document.getElementById('message').value;

  let formattedMessage = `Email : ${email}\nMessage :\n${message}`; 

  let data = {
    channel: "CSU7L8J0Z",
    text: formattedMessage
  }

  $.ajax({
    url: API_LINK + 'chat.postMessage',
    type: "POST",
    headers: {
      "Authorization": "Bearer " + SLACK_TOKEN
    },
    data: JSON.stringify(data),
    contentType: "application/json; charset=utf-8",
    dataType: "json"
  }).done(function (response) {
    console.log(response);
    alert('Youpi');
  }).fail(function (error) {
    console.log(error);
    alert('Oups');
  })
});

