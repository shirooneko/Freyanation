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

const T = new Twit({
    consumer_key: 'RjBFTDBncWdlTUt1cmwtRnk1VHk6MTpjaQ',
    consumer_secret: 'r2gQs-JGr0rXVvGnit0phSjkmdfygQAprO0C-oGtwZ4IQg51r3',
    access_token: '1213416161708085250-8XA2r4u4yUu4IaazUQLfztPJX6F4oo',
    access_token_secret: 'lc87IkXTpbcx8NlvKFWaXLWsq5a3z1GWtQXrbnbP0pdZB',
});

// Route untuk halaman utama
app.get('/', (req, res) => {
    res.render('homepage');
});

app.get('/galery', (req, res) => {
    res.render('galery');
});