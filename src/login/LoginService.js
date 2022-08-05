const loginDao = require('./LoginDao');

const login = function(callback, user, res) {
    loginDao.login((selectResult) => {
        try {
            if(selectResult.length > 0) { // 조회결과가 있었을 경우
                callback('success', JSON.stringify(selectResult[0]));
            }
            else { // 일치하는 조회결과가 없었을 경우
                callback('fail');
            }
        } catch(err) { // 데이터베이스 오류가 나왔을 경우
            console.error('LoginDAO 데이터베이스 오류 : ', err);
        }
    }, user)
        .catch(err => { console.error('loginService 에러 : ', err)})
}

///////////////////////////////////////////////////

// Passport는 req 객체에 isAuthenticated 메서드를 추가한다. 로그인 중이면 req.isAuthenticated() 가 true 이고 아니면 false 다.
const isLoggedIn = (req, res, next) => {
    if (req.isAuthenticated()) {
        next();
    } else {
        res.status(403).send('로그인 필요');
    }
};

const isNotLoggedIn = (req, res, next) => {
    if (!req.isAuthenticated) {
        next();
    } else {
        const message = encodeURIComponent('로그인한 상태입니다.');
        res.redirect(`/?error=${message}`);
    }
}
///////////////////////////////////////////////////

const logout = function(req, res) {
    try{
        res.clearCookie('logedIn'); // 쿠키로 로그인 관리
    }
    catch(err) {
        console.error(err);
    }
}

module.exports = { login, logout };