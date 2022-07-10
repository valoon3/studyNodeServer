const express = require('express');
const app = express();
const port = 8080;

const birds = require('../routes/birds');
app.use('/birds', birds);

app.get('/', (req, res) => {
    console.log('/');
    res.send('hello world');
});

app.get('/api', (req, res) => {
    console.log('/api');
    res.send('api api api');
});

app.listen(port, () => {
    console.log('8080 포트에서 대기중');
});