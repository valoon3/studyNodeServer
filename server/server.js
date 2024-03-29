const path = require('path');
const express = require('express');
const session = require('express-session');
const cookieParser = require('cookie-parser');
const dotenv = require('dotenv');
const app = express();
const morgan = require('morgan');
const cors = require('cors');
const passport = require('passport');
const bodyParser = require('body-parser');
const sequelize = require('../sequelize/models')

// 라우터 경로 임포트
const port = 8080;
const corsOption = require('./cors');
const totalRouter = require('./totalRouter');
const passportConfig = require('../passport/index');

sequelize.sync({ force: false })
    .then(() => {
        console.log('데이터베이스 연결 성공');
    })
    .catch((err) => {
        console.error(err);
    });
// 추가된 미들웨어
dotenv.config();
app.use(cors()); // cors 설정
// app.use(cors(corsOption)); // cors 설정 나중에 배포때 수정하자
app.use(express.json(), bodyParser.raw(), bodyParser.text()); // 여러개 미들웨어 장착 가능
passportConfig();
app.use(express.urlencoded({ extended: true }));
app.use('/', express.static(path.join(__dirname, 'public')))
app.use(session({
    secret: process.env.COOKIE_SECRET,
    resave: false, // 변환 내용이 없더라도 다시 저장할 것인가
    saveUninitialized: true, // 저장할 내용이 없더라도 세션을 생성할 것인인가
    cookies: {
        httpOnly: true,
        secure: false,
    },
    name: 'session-cookies',
}));
app.use(passport.initialize()); // req에 passport 설정을 심고
app.use(passport.session()); // req.session 객체에 passport 정보를 저장합니다.

app.use((req, res, next) => {
    process.env.NODE_ENV === 'production' ? morgan('combined')(req, res, next) : morgan('dev')(req, res, next);
});
// app.use(cookieParser(비밀키)); // req.cookies 객체에 들어간다.

// 서버에서 cors 허락
// npm i cors를 통해서 해결도 가능하다.
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000'); // cors 해결 방법
    console.log(req.isAuthenticated());
    next();
})


// 라우터 미들웨어 설정
app.use(totalRouter);

// 에러처리 미들웨어
app.use((req, res, next) => {
    res.status(404).send('Not Found');
});

app.listen(port, () => {
    console.log(`server run at ${port} port!!!`);
});

