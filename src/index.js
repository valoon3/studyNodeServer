const express = require('express');
const router = express.Router();

router.use((req, res, next) => {
    next();
});

// 홈페이지 정의
router.get('/', (req, res) => {
    console.log('/');
    res.send('hello world!!');
});

router.get('/about', (req, res) => {
    res.send('about index');
});

router.get('/api', (req, res) => {
    console.log('/api');
    res.send('api api api');
});

module.exports = router;


