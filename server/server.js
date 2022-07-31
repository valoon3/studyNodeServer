const path = require('path');
const express = require('express');
const session = require('express-session');
const cookieParser = require('cookie-parser');
const dotenv = require('dotenv');
const app = express();
const morgan = require('morgan');
const cors = require('cors');
const corsOption = require('./cors');

// 라우터 경로 임포트
const port = 8080;
const totalRouter = require('./totalRouter');

// // corsOption 설정
// const allowList = ['http://localhost:3000'];
//
// const corsOptions = {
//     origin: function(origin, callback) {
//         if(allowList.indexOf(origin)  !== -1 ) {
//             callback(null, true);
//         } else {
//             callback(new Error('cors 오류를 발생시켰다!'));
//         }
//     },
//     optionsSuccessStatus: 200
// }

// 추가된 미들웨어
dotenv.config();
app.use(cors(corsOption));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/', express.static(path.join(__dirname, 'public')))
app.use(express.urlencoded({extended: false}));
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

app.use((req, res, next) => {
    process.env.NODE_ENV === 'production' ? morgan('combined')(req, res, next) : morgan('dev')(req, res, next);
});


// 서버에서 cors 허락
// npm i cors를 통해서 해결도 가능하다.
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000'); // cors 해결 방법
    console.log('cors 설정');
    next();
})

// 라우터 미들웨어 설정
app.use(totalRouter);

app.listen(port, () => {
    console.log(`server run at ${port} port!!!`);
});

