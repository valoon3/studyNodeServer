const path = require('path');
const express = require('express');
const session = require('express-session');
const cookieParser = require('cookie-parser');
const dotenv = require('dotenv');
const app = express();
const morgan = require('morgan');

// 라우터 경로 임포트
const port = 8080;
const totalRouter = require('./totalRouter');

// 추가된 미들웨어
dotenv.config();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/', express.static(path.join(__dirname, 'public')))
app.use(express.urlencoded({extended: false}));
app.use(cookieParser(process.env.COOKIE_SECRET));
app.use(session({
    resave: false,
    saveUninitialized: true,
    secret: process.env.COOKIE_SECRET,
    cookies: {
        httpOnly: true,
        secure: false,
    },
    name: 'session-cookies',
}));
app.use(morgan('dev')); // log 미들웨어


// 서버에서 cors 허락
// npm i cors를 통해서 해결도 가능하다.
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000'); // cors 해결 방법
    next();
})

// 라우터 미들웨어 설정
app.use(totalRouter);

app.listen(port, () => {
    console.log(`server run at ${port} port!!!`);
});