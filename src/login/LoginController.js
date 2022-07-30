const express = require('express');
const router = express.Router();
const axios = require('axios');
const user= require('./LoginDAO');

router.use('/login', (err, req, res, next) => {
    next();
})

router.use((req, res, next) => {
    console.log('/login');
    next();
})

router.use((req, res, next) => {
    console.log('test');
    next();
});

router.get((req, res) => {
    console.log('success');
    console.log(req);
});


// 홈페이지 정의
router.get(`/test`, (req, res) => {
    // npm i cors 를 통해서 해결도 가능하다.
    // 서버에서 허락을 해줘야한다.
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000'); // cors 해결 방법
    console.log('login/test');
    console.log('성공!!');
    // user();

    // 만약 post로 받아오게되면 이런식으로 받아온다.
    // const hashedPassword = await bcript.hash(req.body.password, 13); // 암호화해서 데이터 입력
    // router.post('/', async (req, res) => {
    //     await User.create({
    //         email: req.body.email,
    //         nickname: req.body.nickname,
    //         password: hashedPassword,
    //     })
    // res.send('ok');
    // });

    res.send('test');
});

router.get('/about', (req, res) => {
    res.send('about test');
});

module.exports = router;


