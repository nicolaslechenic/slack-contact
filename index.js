const API_LINK = "https://slack.com/api/";

document.getElementById('submit').addEventListener('click', () => {
  let message = document.getElementById('message').value;

  let data = {
    channel: "CSU7L8J0Z",
    text: message
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

