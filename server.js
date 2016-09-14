const express = require('express');
const app = express();
app.set('view engine', 'pug');
app.set('views', './bundle');

app.use(express.static('public'));

app.use(function (req, res) {
  res.render('index');
});

app.listen(3000, function () {
  console.log('App started on 3000');
});

