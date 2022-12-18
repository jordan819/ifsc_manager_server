const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
require('dotenv/config');

let port = process.env.PORT || 3000;

app.use(cors());
app.use(bodyParser.json())

const resultsRoute = require('./routes/results');
const climbersRoute = require('./routes/climbers');

app.use('/results', resultsRoute);
app.use('/climbers', climbersRoute);

app.get('/', (req, res) => {
    res.send('We are on home');
});

app.get('/products', (req, res) => {
    res.send('We are on products');
});

app.get('/users', (req, res) => {
    res.send('We are on users');
});

mongoose.connect(
    process.env.DB_CONNECTION,
    {useNewUrlParser: true},
    () => console.log('connected to DB!'));

app.listen(port, () => {
    console.log(`App is running on port http://localhost:${port}`);
});
