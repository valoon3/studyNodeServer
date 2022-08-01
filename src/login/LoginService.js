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

const logout = function(req, res) {
    try{
        res.clearCookie('logedIn'); // 쿠키로 로그인 관리
    }
    catch(err) {
        console.error(err);
    }
}

module.exports = { login, logout };