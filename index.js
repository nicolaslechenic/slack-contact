const API_LINK = "https://slack.com/api/";

document.addEventListener('click', function() {
  let message = document.getElementById('message').value;

  fetch(API_LINK + 'chat.postMessage', {
    method: 'POST',
    headers: {
      'Authorization': 'Bearer ' + SLACK_TOKEN,
      'Content-Type': 'application/json;charset=utf-8'
    },
    body: '{"channel":"CSU7L8J0Z","text":"' + message + '"}'
  })
});