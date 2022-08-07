// 라우터에서 접근 권한을 제어하는 미들웨어

// Passport는 req 객체에 isAuthenticated 메서드를 추가한다.
// 로그인 중이면 isLoggedIn이 true 이고 그렇지 않으면 false 이다

exports.isLoggedIn = (req, res, next) => {
    if(req.isAuthenticated()) {
        next();
    } else {
        res.status(403).send('로그인 필요');
    }
};

exports.isNotLoggedIn = (req, res, next) => {
    if(!req.isAuthenticated()) {
        next();
    } else {
        const message = encodeURIComponent('로그인한 상태입니다.');
        res.redirect(`/?error=${message}`);
    }
}