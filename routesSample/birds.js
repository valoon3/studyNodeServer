const express = require('express');
const router = express.Router();

router.use((req, res, next) => {
    console.log('start bird');
    next();
});

// 홈페이지 정의
router.get('/', (req, res) => {
    res.send('Birds home page');
});

router.get('/about', (req, res) => {
    res.send('about bird');
});

module.exports = router;


