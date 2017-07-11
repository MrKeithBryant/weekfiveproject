const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended:false}));

app.get('/', function (req, res) {
  const color = '<form action="/" method="post">' +
                  '<h1>My favorite color is...not going to be listed. Because we need more to go on.</h1>' +
                  '<h2>So this will show where the post is coming from. Up here or down there.</p>' +
                  '<input type="text" name="color" placeholder="fave color"/>' +
                  '<button type="submit">Submit</button>' +
                  '<h1>So, let us see how there is a way that we can put them both on screen.</h1>' +
                  '<h2><b>Without</b>getting tripped up with accidental functions.';
                  '</form>';
                  res.send(color);
});

app.get('/', function (req, res) {
  const cars =  '<form action="/" method="post">' +
                '<h1> My favorite car is....</h1>' +
                '<input type="text" name="car" placeholder="car"/>' +
              '<button type="submit">Submit</button>' +
              '</form>';
              res.send(cars);
});

app.post('/', function (req, res) {
  const favoriteColor = req.body.color;
  const colors = '<p>My favorite color is: Somewhere underneath here. In small print. Even smaller than this.</p>' + favoriteColor;
  res.send(colors);
});

app.post('/', function (req, res) {
  const favoriteCar = req.body.car;
  const faves = '<p>My favorite car is: </p>' + favoriteCar;
  res.send(faves);
});



app.listen(3000, function () {
  console.log('pracpars');
});
