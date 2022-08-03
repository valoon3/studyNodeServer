const passport = require('passport');

// server에서 로그인 시 실행되며, req.session 객체에 어떤 데이터를 저장할지 정하는 메서드입니다.
module.exports = () => {

    passport.serializeUser((user, done) => {
        // 1. 로그인 시 실행
        // 2. req.session 객체에 어떤 데이터를 저장할지 정하는 메서드
        // 3. 매개변수로 user를 받고 나서, done 함수에 두 번째 인수로 user.id를 넘기는거다.
        done(null, user.id); // 4. done(에러 발생 시 사용하는 인수, 저장하고 싶은 데이터)
        // 5. 여기서는 아이디만 넘기는 형식
    });

    passport.deserializeUser((id, done) => {
        // 1. 매 요청 시 실행
        // 2. passport.session 미들웨어가 이 메서드를 호출한다.
        // 3. serializeUser의 done의 두번째 인수로 넣었던 데이터가 deserializeUser의 매개변수가 된다.
        // 4. 여기서는 사용자의 아이디이다.
        // 5. serializeUser에서 세션에 저장했던 아이디를 받아 데이터베이스에서 사용자 정보를 조회한다.
        // 6. 조회한 정보를 req.user에 저장하므로 앞으로 req.user를 통해 로그인한 사용자의 정보를 가져올 수 있다.
        User.findeOne({ where: {id}})
            .then(user => done(null, user))
            .catch(err => {
                `done(err)`
                console.log(err);
            })
    });

    // 1. 라우터를 통해 로그인 요청이 들어옴
    // 2. 라우터에서 passportauthenticate 메서드 호출
    // 3. 로그인 전략 수행
    // 4. 로그인 성공 시 사용자 정보 객체와 함께 req.login
    // 5. req.login 메서드가 passport.serializeUser
    // 6. req.session에 사용자 아이디만 저장
    // 7. 로그인 완료
    // session

    // 로그인 이후 과정
    // 1. 요청이 들어옴
    // 2. 라우터에 요청이 도달하기 전에 passport.session 미들웨어가 passport.deserializeUser 메서드 호출
    // 3. req.session에 저장된 아이디로 데이터베이스에서 사용자 조회
    // 4. 조회된 사용자 정보를 req.user에 저장
    // 5. 라우터에서 req.user 객체 사용 가능

}