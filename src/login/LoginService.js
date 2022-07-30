const loginDao = require('./LoginDao');

const login = function(callback, user, res) {
    loginDao.login((selectResult) => {
        console.log(selectResult[0]);
        if(selectResult.length > 0) {
            callback('success', selectResult[0]);
        }
        else {
            callback('아이디, 비밀번호를 확인해주세요.');
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