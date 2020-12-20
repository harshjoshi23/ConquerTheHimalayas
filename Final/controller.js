const express = require('express');
const bodyParser = require('body-parser');
const path = require('path')
const app = express();

const port = 8080;

app.use('/img', express.static('img'));
app.use('/destination', express.static('views/destination'));
app.use('/blog', express.static('views/blog'));
app.use('/img/trip', express.static('img'));
app.use('/img/Blogimg', express.static('img'));
app.use('/img/trip', express.static('img'));
app.use('/img/Background', express.static('img'));
app.use('/css', express.static('css'));
app.use('/public', express.static('public'));
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({
  extended: false
}));
app.use(bodyParser.json());

// Get Methods
app.get('/', (req, res) => {
  res.render('index');
});

app.get('/culture', (req, res) => {
  res.render('culture');
});

app.get('/contact', (req, res) => {
  res.render('contact');
});

app.get('/destination', (req, res) => {
  res.render('destination');
});

app.get('/about', (req, res) => {
  res.render('about');
});

app.get('/destination/valley-of-flowers', (req, res) => {
  res.render('destination/valley');
});

app.get('/destination/hampta', (req, res) => {
  res.render('destination/hampta');
});

app.get('/destination/kasol', (req, res) => {
  res.render('destination/kasol');
});

app.get('/destination/lahesh', (req, res) => {
  res.render('destination/lahesh');
});

app.get('/blog', (req, res) => {
  res.render('blog/blog');
});

// listen to port
app.listen(port, () => {
  console.log(`Connected to port : `, port);
})
