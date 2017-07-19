const express = require('express');
const app = express();
const path = require('path');
const fs = require('fs');
const words = fs.readFileSync('./words', 'utf-8').toLowerCase().split('\n');
const mustacheExpress = require('mustache-express');
const bodyParser = require('body-parser');
app.engine('mustache', mustacheExpress());
app.set('views', './views');
app.set('view engine', 'mustache');
app.use('/files', express.static(path.join(__dirname, 'public')));
console.log(words.length);
//need list of words
app.get('/', function(req, res) {
  const gameWord = words[Math.floor((Math.random() * 100000) + 1)];
  console.log(gameWord);
  res.send('Nodegame');
});
// return gameWord
//must connect "./views" ***Must create "views" folder and insert mustache file, which goes to res.render//
//need game logic



app.post('nodegame.mustache', function (){

});

app.post('/', function(req, res) {
  res.render('nodegame.mustache', {node: 'game'});
});
app.listen(process.env.PORT || 3000, function() {
  console.log('hello cruel javascript world');
});
/*
app.listen(3000, function() {
  console.log("Valid input")
});
*/
