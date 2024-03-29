const express = require('express');
const { isLoggedIn, inNotLoggedIn} = require('../src/login/LoginService');

const router = express.Router();
router.use((req, res, next) => {
    res.locals.user = req.user;
    res.locals.followerCount = 0;
    res.locals.followingCount = 0;
    res.locals.followingCount = [];
    next();
})

router.get(('/profile'), isLoggedIn, (req, res) => {
    res.render(('profile', {title: '내 정보 - NodeBird'}));
});

router.get('/join', isNotLoggedIn, (req, res) => {
    res.render('join', { title: '회원가입 - NodeBird'});
});