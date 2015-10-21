var Twitter = require('twitter');
var express = require('express');
var port = process.env.PORT || 3000;
var app = express();
var client = new Twitter({
  consumer_key: process.env.CONSUMER_KEY,
  consumer_secret: process.env.CONSUMER_SECRET,
  access_token_key: process.env.ACCESS_TOKEN_KEY,
  access_token_secret: process.env.ACCESS_TOKEN_SECRET
});

app.get('/tweets/:user', function(request, response) {
  var params = {
    screen_name: request.params.user,
    count: 25
  };

  client.get('statuses/user_timeline', params, function(error, tweets, data){
    if (!error) {
      response.send(tweets);
    } else {
      response.status(500).send(error);
    }
  });
});

app.use(express.static('.'));
app.listen(port);
console.log('listening on port:', port);
