const express = require('express');
const router = express.Router();
const loginService = require('./LoginService');

// login
router.use((req, res, next) => {
    console.log('login 시작');
    next();
})

router.get('/', (req, res, next) => {
    console.log('success');
    res.status(200).send('success');
});

router.post('/', (req, res) => {
    console.log('-login post-');
    console.log('req.body : ', req.body);
    loginService.login((result, json) => {
        result === 'success' ? res.status(200).send(json) : res.status(400).send('fail');
    }, req.body, res);

    // res.status(200).send('login access');
})


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


