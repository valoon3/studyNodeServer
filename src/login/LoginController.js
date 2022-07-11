const express = require('express');
const router = express.Router();
const axios = require('axios');

const loginPath = '/login';

router.use(loginPath, (req, res, next) => {
    console.log('login');
    next();
});

router.get(loginPath, (req, res) => {
    res.send('success');
    console.log(req);
});


// 홈페이지 정의
router.get(`${loginPath}/test`, (req, res) => {
    console.log('login/test');

    res.send('test');

    return 'asdfasdfasdfasdf';
});

router.get(`${loginPath}/about`, (req, res) => {
    res.send('about test');
});

module.exports = router;


