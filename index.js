const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended:false}));
app.get('/', function (req, res) {
  const cars =  '<form action="/" method="post">' +
                '<h1> My favorite car is....</h1>' +
                '<input type="text" name="car" placeholder="car"/>' +
              '<button type="submit">Submit</button>' +
              '</form>';
              res.send(cars);
});

app.get('/', function (req, res) {
  const colors = '<h1>My favorite color is...</h1>' +
                  '<form action="/" method="post">' +
                  '<input type="text" name="color" placeholder="color"/>' +
                  '<button> type="submit">Submit</button>' +
})

app.post('/', function (req, res) {
  const favoriteCar = req.body.car;
  const faves = '<p>My favorite car is: </p>' + favoriteCar;
  res.send(faves);
});

app.listen(3000, function () {
  console.log('pracpars');
});
