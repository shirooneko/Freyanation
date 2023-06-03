const path = require('path');
const express = require('express');
const hbs = require('hbs');
const bodyParser = require('body-parser');
const Twit = require('twit');
const app = express();

app.listen(4000, () => {
    console.log('Server is running at port 4000, silakan akses http://localhost:400');

})

app.set('views', path.join(__dirname, 'views'));

app.set('view engine', 'hbs');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use('/assets', express.static(__dirname + '/public'));

hbs.registerHelper('inc', function (value, options) {
    return parseInt(value) + 1;
})

// Route untuk halaman utama
app.get('/', (req, res) => {
    res.render('homepage');
});

app.get('/galery', (req, res) => {
    res.render('galery');
});

app.get('/about-freya', (req, res) => {
    res.render('about-freya');
})
app.get('/freyanation', (req, res) => {
    res.render('freyanation');
})
app.get('/project', (req, res) => {
    res.render('project');
})
app.get('/join', (req, res) => {
    res.render('join');
})