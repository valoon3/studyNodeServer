const express = require('express');
const app = express();
const port = 8080;

const birds = require('../routesSample/birds');
const login = require('./login/LoginController');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/birds', birds);
app.use(login);



app.get('/', (req, res) => {
    console.log('/');
    res.send('hello world');
});

app.get('/api', (req, res) => {
    console.log('/api');
    res.send('api api api');
});

app.listen(port, () => {
    console.log(`server run at ${port} port!!!`);
});