const express = require('express');
const app = express();

// 라우터 경로 임포트
const port = 8080;
const totalRouter = require('./totalRouter');

// 추가된 미들웨어
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// 서버에서 cors 허락
// npm i cors를 통해서 해결도 가능하다.
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000'); // cors 해결 방법
    next();
})

// 라우터 미들웨어 설정
app.use(totalRouter);


app.get('/', (req, res) => {
    console.log('/');
    res.send('hello world');
});



app.listen(port, () => {
    console.log(`server run at ${port} port!!!`);
});