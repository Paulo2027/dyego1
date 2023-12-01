const express = require('express');
const exphbs = require('express-handlebars');
const  Port = 3000
const app = express();

app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars');

app.get('/', (req, res) => {
  res.render('cadastro');
});

app.get('/meus-produtos', (req, res) => {
  res.render('produtos');
});
app.use(express.static('public'));

app.listen(3000, () => {
  console.log('Server started');
});